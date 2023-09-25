const express = require('express')
const router = express.Router()
const PublicoController = require('../controllers/PublicoController')
const UsuariosController = require('../controllers/UsuariosController')

router.get('/', PublicoController.index)
router.post('/cadastro', UsuariosController.cadastrar)
router.post('/login', UsuariosController.login)

module.exports = router