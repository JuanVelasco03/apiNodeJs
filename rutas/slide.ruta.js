const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Slide = require('../controladores/slide.controlador');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-slide', Slide.mostrarSlide);

app.post('/crear-slide', verificarToken, Slide.crearSlide);

app.put('/editar-slide/:id', verificarToken, Slide.editarSlide);

app.delete('/borrar-slide/:id', verificarToken, Slide.borrarSlide);

app.get('/mostrar-img/:imagen', Slide.mostrarImg);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;
