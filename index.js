/*==================================================================
UBICAMOS LOS REQUERIMIENTOS
===================================================================*/
// const http = require('http');
require('./config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors')



/*==================================================================
CREAMOS UNA VARIABLE PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
===================================================================*/
const app = express();

app.use(cors());

/*==================================================================
MIDDLEWARE PARA BODY PARSER
===================================================================*/
app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
app.use(bodyParser.json({limit: '10mb', extended:true })); 


/*==================================================================
MIDDLEWARE PARA FILEUPLOAD
===================================================================*/

app.use(fileUpload()); 

/*==================================================================
IMPORTAMOS LAS RUTAS
===================================================================*/

app.use(require('./rutas/slide.ruta'));
app.use(require('./rutas/galeria.ruta'));
app.use(require('./rutas/articulos.ruta'));
app.use(require('./rutas/administradores.ruta'));


/*==================================================================
CONEXION A LA BASE DE DATOS
===================================================================*/
mongoose.connect('mongodb://localhost:27017/apirest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
  if(err) throw err;
  console.log("Conectado a la base de datos")
});

/*==================================================================
SALIDA PUERTO HTTP
===================================================================*/

app.listen(process.env.PORT, () => {
  console.log(`Habilitado en el puerto ${process.env.PORT}`)
})
 

