function main()
{
  console.log("Iniciando chat_client...")
  var person = prompt("Please enter your name");
  var socket = io();

  //-- Obtener los elementos de interfaz:

 //-- Boton de envio de mensaje
 var send = document.getElementById('send')

 //-- Parrafo para mostrar mensajes recibidos
 var display = document.getElementById('display')

 //-- usuarios
 var usuarios = document.getElementById('user')

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

  socket.emit('persona', person)

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {
    //-- Enviar el mensaje, con el evento "new_message"
    socket.emit('new_message', person + ':' + msg.value);
    //document.getElementById("msg").value = '';

    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje emitido")
    msg.value = " ";
  }

  //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo
  socket.on('usuarios', usuar => {
    usuarios.innerHTML = usuar
    console.log(usuar)
  });

  socket.on('bienvenido', wel => {
    display.innerHTML += wel + '<br>'
  });
  socket.on('Abandono', aban => {
    display.innerHTML += aban + '<br>'
  });


  //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });

}
