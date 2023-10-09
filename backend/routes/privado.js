const express = require('express')
const router = express.Router()
const DepoimentosController = require('../controllers/DepoimentosController')

router.get('/teste_listagem', DepoimentosController.testeListagem);
router.get('/lista_mensagem', DepoimentosController.listaMensagens);
router.get('/ler_mensagem/:id', DepoimentosController.lerMensagem);
router.post('/salvar_depoimento', DepoimentosController.salvar);

module.exports = router
