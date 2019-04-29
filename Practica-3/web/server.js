
const http = require('http'); //-- require es como import
const fs = require('fs');
const path = require('path');
var url = require('url');

console.log("Arrancando servidor...")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        console.log('init');

        fs.readFile('tienda.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)
        })
    }
    if (req.url.split(".")[1] == 'css') {
        let dir_path = path.join(__dirname, req.url)
        console.log(dir_path);

        fs.readFile(dir_path, (err, data) => {

            res.writeHead(200, { 'Content-Type': 'text/css' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)
        })
    }
    if (req.url.split(".")[1] == 'html') {
        let dir_path = path.join(__dirname, req.url)
        console.log(dir_path);

        fs.readFile(dir_path, (err, data) => {

            res.writeHead(200, { 'Content-Type': 'text/html' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)
        })
    }
    if (req.url.split(".")[1] == 'json') {
        let dir_path = path.join(__dirname, req.url)
        console.log(dir_path);

        fs.readFile(dir_path, (err, data) => {

            res.writeHead(200, { "Content-Type": "application/json" });
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)
        })
    }
    if (req.url.split(".")[1] == 'js') {
        let dir_path = path.join(__dirname, req.url)
        console.log(dir_path);

        fs.readFile(dir_path, (err, data) => {

            res.writeHead(200, { 'Content-Type': 'application/javascript' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)

        })
    }
    if (req.url.split(".")[1] == 'jpg' || req.url.split(".")[1] == 'jpeg') {
        let dir_path = path.join(__dirname, req.url)
        console.log(dir_path);

        fs.readFile(dir_path, (err, data) => {

            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            res.end(data)

        })

    }



}).listen(8080);
