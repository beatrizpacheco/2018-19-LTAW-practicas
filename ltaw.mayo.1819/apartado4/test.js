const express = require('express')
const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http);

var countingInterval= 0;

//-- Puerto donde lanzar el servidor
const PORT = 3000;

//-- contador clientes
var numclients = 0;

//-- Punto de entrada pricipal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log("/index.html")
});

//-- caso de haber css
app.get('/chat_client.css', (req, res) => {
  res.sendFile(__dirname + '/chat_client.css');
  console.log("/chat_client.css")
});

//-- Servir el cliente javascript
app.get('/chat_client.js', (req, res) => {
  res.sendFile(__dirname + '/chat_client.js');
  console.log("Fichero js solicituado")
});

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-- Evento: Nueva conexion recibida

io.on('connection', (socket) => { // si hay evento conection metemos traza
  //-- Un nuevo cliente se ha conectado!
  console.log('--> Usuario conectado!');
  numclients += 1;
  socket.emit('new_message', 'Bienvenido! <br>');
  socket.broadcast.emit('new_message', 'Se ha conectado un usuario<br>');

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
    numclients -= 1;
    io.emit('new_message', 'Se ha desconectado un usuario<br>');
  });

    //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {

    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido: " + msg)
    if (msg.split(' ',)[1] == '/help' || msg.split(' ',)[1] == ' /help'){
      msg = '<br><u>Con el comando "help" puedes:</u><br>' +
            '"/list": Ver la cantidad de usuarios conectados<br>' +
            '"/hello": Recibir un mensaje del servidor<br>' +
            '"/date": Saber la fecha<br>' +
            '"/dracarys": Mensaje sorpresa ajajja <br>';
     socket.emit('new_message', msg);

   }else if (msg.split(' ',)[1] == '/list' || msg.split(' ',)[1] == ' /list'){
     msg = 'El numero de usuarios conectados es: ' + numclients;
     socket.emit('new_message', msg);

   }else if (msg.split(' ',)[1] == '/dracarys' || msg.split(' ',)[1] == ' /dracarys'){
     msg = '¡FUEGO!<br>';

     countingInterval = setInterval(function(){io.emit('new_message', msg);}, 3000);
     setInterval(function(){clearInterval(countingInterval);}, 10000);



   }else if (msg.split(' ',)[1] == '/hello' || msg.split(' ',)[1] == ' /hello'){
     msg = 'HOLIIIIII, soy el jefesito';
     socket.emit('new_message', msg);

   }else if (msg.split(' ',)[1] == '/date' || msg.split(' ',)[1] == ' /date'){
     var date = new Date();
     var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
     var week = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
     msg = 'La fecha de hoy es: ' + week[date.getDay()] + ", " + date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear();
     socket.emit('new_message', msg);

   }else{
     //-- Emitir un mensaje a todos los clientes conectados
     io.emit('new_message', msg);
   }

 })

});
