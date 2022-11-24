const express = require('express')// Guardo express en la constante
const app = express()//Asigno express como una función para darle metodos y recursos a app
const logger= require("morgan")
const cors = require ("cors")


const indexRouter = require('./routes/index')

const {conect}=require("./db/db")

//Configuración
app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use('/api', indexRouter ) //API de usuario
conect()

module.exports = app


