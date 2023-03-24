const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Usuarios = require('../controladores/usuarios.controlador');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-usuarios',  Usuarios.mostrarUsuarios);

app.post('/crear-usuario',  Usuarios.crearUsuario);

app.post('/login-usuario', Usuarios.loginUsuario);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;