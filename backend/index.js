require('dotenv').config()
const express = require('express')
const routerPublico = require('./routes/publico')
const routerPrivado = require('./routes/privado')
const UsuariosController = require('./controllers/UsuariosController')
const app = express()
const porta = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({ extended:true }))
//app.use(express.static('public'))

app.use('/', routerPublico)
//app.use('/', UsuariosController.validaToken, routerPrivado)

app.listen(porta, () => {
    console.log(`Servidor rodando em https://localhost:${porta}`)
})
