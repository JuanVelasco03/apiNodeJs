/*==================================================================
UBICAMOS LOS REQUERIMIENTOS
===================================================================*/
// const http = require('http');
const express = require('express');
const mongoose = require('mongoose');


/*==================================================================
CREAMOS UNA VARIABLE PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
===================================================================*/
const app = express()

/*==================================================================
PETICIONES GET
===================================================================*/

app.get('/', (req, res) => {
  // res.send("Hola juan")

  let salida = {
    nombre: "juan",
    edad: 37,
    url: req.url
  }

  res.send(salida)

})
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

app.listen(4000, () => {
  console.log("Habilitado puerto 4000")
})