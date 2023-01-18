const express = require('express');
const cors = require('cors');
class Server {

    constructor() {

        // Atributos
        this.port = '8080';
        this.app = express(); 
        this.usuariosExamplesPatch = '/api/userExample'

        // Middlewares
        this.middlewares();

        // Inicialización de funciones
        this.routes();
              

    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body 
        this.app.use(express.json());
        // Interfaz publica
        this.app.use( express.static('public') );
     }


    routes() {

       this.app.use(this.usuariosExamplesPatch , require('../routes/userExample'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('El servidor esta encendido en el puerto:', this.port);
        }) 

        
    }


}

module.exports = Server;