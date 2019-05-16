const electron = require('electron')

console.log("Arrancando electron...")

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', () => {
    console.log("Evento Ready!")

    // Crear la ventana principal de nuestra Interfaz Gráfica
    win = new electron.BrowserWindow({
        width: 1200,
        height: 720
    })
    win.loadFile('./index.html')
})
