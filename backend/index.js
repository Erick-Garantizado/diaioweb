const express = require('express')
const router = require('./routes/publico')
const app = express()
const porta = process.env.PORT
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({ extended:true }))
//app.use(express.static('public'))

app.use('/', router)

app.listen(porta, () => {
    console.log(`Servidor rodando em https://localhost:${porta}`)
})