const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Articulos = require('../controladores/articulos.controlador');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-articulos', Articulos.mostrarArticulos);

app.post('/crear-articulo',verificarToken, Articulos.crearArticulo);

app.put('/editar-articulo/:id',verificarToken, Articulos.editarArticulo);

app.delete('/borrar-articulo/:id',verificarToken, Articulos.borrarArticulo);

app.get('/mostrar-img-articulo/:imagen', Articulos.mostrarImg);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;

