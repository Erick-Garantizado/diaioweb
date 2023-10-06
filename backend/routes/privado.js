const express = require('express')
const router = express.Router()
const DepoimentosController = require('../controllers/DepoimentosController')

//router.get('/')
router.post('/salvar_depoimento', DepoimentosController.salvar)

module.exports = router