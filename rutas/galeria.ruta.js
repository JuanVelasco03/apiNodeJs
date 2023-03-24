const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Galeria = require('../controladores/galeria.controlador');


/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-galeria', Galeria.mostrarGaleria);

app.post('/crear-galeria', verificarToken, Galeria.crearGaleria);

app.put('/editar-galeria/:id', verificarToken, Galeria.editarGaleria);

app.delete('/borrar-galeria/:id', verificarToken, Galeria.borrarGaleria);

app.get('/mostrar-img-galeria/:imagen', Galeria.mostrarImg);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;
