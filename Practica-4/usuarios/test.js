const express = require('express')
const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3000;

//-- contador clientes
var numclients = 0;
var lista = [];

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
  //socket.emit('new_message', 'Bienvenido! <br>');
  //socket.broadcast.emit('new_message', 'Se ha conectado un usuario<br>');


  socket.on('persona', person => {
    console.log(person);
    lista[numclients] = person;
    io.emit('usuarios', lista)
    console.log( "todos los usuarios: " + lista );
    socket.emit('bienvenido',"bienvenido al chat " + person );
    socket.broadcast.emit('bienvenido', "El nuevo usuario llamado " + person + " se ha unido al chat")

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
      numclients = numclients - 1;
      lista[numclients] = '0';
      socket.broadcast.emit('Abandono', "El  usuario  " + person + "  ha abandonado el chat")
      console.log(person);

});



  //-- Detectar si el usuario se ha desconectado
  //socket.on('disconnect', function(){
  //  console.log('--> Usuario Desconectado');
  //  numclients -= 1;
  //  io.emit('new_message', 'Se ha desconectado un usuario<br>');
//});

    //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    var msg = msg.split(":")[1];
    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido: " + msg)

    if (msg == '/help' || msg == ' /help'){
      msg = '<li>Help:' + '</li><li>' + '/list: Usuarios conectados'
                + '</li><li>' + '/hello: Mensaje del servidor' + '</li><li>'
                + '/date: Para saber la fecha</li>';
     socket.emit('new_message', msg);

   }else if (msg == '/list' || msg == ' /list'){
     msg = 'Usuarios conectados: ' + numclients + '<br>' + lista
     socket.emit('new_message', msg);

   }else if (msg == '/hello' || msg == ' /hello'){
     msg = 'HOLIIIIII, soy el jefesito';
     socket.emit('new_message', msg);

   }else if (msg == '/date' || msg == ' /date'){
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

})
});
