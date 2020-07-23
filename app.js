

const http = require('http');

http.createServer( (req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Sebastian Balanta Salazar',
        edad: 23
    }

    /* resp.write('Hola Mundo'); */
    resp.write(JSON.stringify(salida));
    resp.end();

})
.listen(8080);

console.log("Escuchando el puerto 8080");
