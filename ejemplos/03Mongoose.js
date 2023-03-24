/*==================================================================
UBICAMOS LOS REQUERIMIENTOS
===================================================================*/
// const http = require('http');
const express = require('express');


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
SALIDA PUERTO HTTP
===================================================================*/

app.listen(4000, () => {
  console.log("Habilitado puerto 4000")
})


