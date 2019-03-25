const express = require('express')
const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3000

//-- Punto de entrada pricipal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log("/index.html")
})

//-- Servir el cliente javascript
app.get('/chat_client.js', function(req, res){
  res.sendFile(__dirname + '/chat_client.js');
  console.log("Fichero js solicituado")
});

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){ // si hay evento conection metemos traza
  console.log('--> Usuario conectado!');
  
    //-- Detectar si el usuario se ha desconectado
    socket.on('disconnect', function(){
      console.log('--> Usuario Desconectado');
    });

    //-- Detectar si se ha recibido un mensaje del cliente
    socket.on('new_message', msg => {

      //-- Notificarlo en la consola del servidor
      console.log("Mensaje recibido: " + msg)

      //-- Emitir un mensaje a todos los clientes conectados
      io.emit('new_message', msg);
    })

  });
