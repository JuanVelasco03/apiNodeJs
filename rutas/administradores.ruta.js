const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Administradores = require('../controladores/administradores.controlador');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-administradores', verificarToken, Administradores.mostrarAdministradores);

app.post('/crear-administrador', verificarToken, Administradores.crearAdministrador);

app.put('/editar-administrador/:id', verificarToken, Administradores.editarAdministrador);

app.delete('/borrar-administrador/:id', verificarToken, Administradores.borrarAdministrador);

app.post('/login', Administradores.login);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;