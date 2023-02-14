let http = require("http");
let server = http.createServer(function (peticion, respuesta){
respuesta.end("servidor de camilo");
});
server.listen(3000, function(){
console.log("El servidor esta listo " + this.address().port);
});

