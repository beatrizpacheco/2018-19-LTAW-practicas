const io = require('socket.io-client');
const socket = io('http://localhost:3000',{transport:['websocket']});

function main()
{
  console.log("Probando...")

  var socket = io();

  //-- Obtener los elementos de interfaz:

 //-- Boton de envio de mensaje
 var send = document.getElementById('send')

 //-- Parrafo para mostrar mensajes recibidos
 var display = document.getElementById('display')

 //-- Caja con el mensaje a enviar
 var msg = document.getElementById("msg")
 if(msg){
    console.log(msg)
  // -- Enviar el mensaje pulsando la tecla ENTER
    msg.addEventListener("keyup", function(event){
      if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('send').click();
      }
    })
 }
 
 //-- Cuando se aprieta el botón de enviar...
 send.onclick = () => {
   console.log(msg.value);
   //-- Enviar el mensaje, con el evento "new_message"
   socket.emit('new_message', msg.value);
   document.getElementById("msg").value = '';

   //-- Lo notificamos en la consola del navegador
   console.log("Mensaje emitido")
 }

 //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo

  socket.on('new_message', msg => {
    var mensaje = document.createElement("P");
    mensaje.innerHTML = msg + '<br>';
    mensajes.appendChild(mensaje);
  });

}