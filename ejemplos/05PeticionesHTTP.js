/*==================================================================
UBICAMOS LOS REQUERIMIENTOS
===================================================================*/
// const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


/*==================================================================
CREAMOS UNA VARIABLE PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
===================================================================*/
const app = express()

/*==================================================================
MIDDLEWARE PARA BODY PARSER
===================================================================*/

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());



/*==================================================================
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
===================================================================*/
let Schema = mongoose.Schema;

let slideSchema = new Schema({
  imagen:{
    type: String,
    required: [true, "La imagen es obligatoria"]
  },
  titulo:{
    type: String,
    required: false
  },
  descripcion:{
    type: String,
    required: false
  }
})


const Slide = mongoose.model("slide", slideSchema);

/*==================================================================
PETICIONES GET
===================================================================*/
app.get('/', (req, res) => {
  // res.send("Hola juan")

  Slide.find({}).exec((err, data) =>{
    if(err){
      return res.json({
        status: 500, 
        mensaje : "Error en la peticion"
      })
    }
    res.json({
      status: 200,
      data
    })

  })
})

/*==================================================================
PETICIONES POST
===================================================================*/

app.post('/crear-slide', (req, res) => {
  let slide = req.body;

  res.json({
    slide
  })
})

/*==================================================================
PETICIONES PUT
===================================================================*/

app.put('/editar-slide/:id', (req, res) => {
  let id = req.params.id;

  res.json({
    id
  })
})

/*==================================================================
PETICIONES DELETE
===================================================================*/

app.delete('/borrar-slide/:id', (req, res) => {
  let id = req.params.id;

  res.json({
    id
  })
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


