var http = require('http');
var fs = require('fs');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {
  fs.readFile('cv.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("---> Peticion recibida")
    console.log("Recurso solicitado (URL): " + req.url)
    if (req.url == '/'){
      fs.readFile('req.url', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
      })
    } else if (req.url.split('.')[1] == 'css'){
      res.readHead(200, {'Content-Type': 'text/css'});
      res.write(req.url.split('/')[1]);
      return res.end();
      //console.log(req.url);
    } else if (req.url.split('.')[1] == 'js'){
      fs.readFile('req.url', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
      })
    }
    res.end(data);
  });
}).listen(8080);
