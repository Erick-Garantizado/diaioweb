const { depoimentos } = require('../models');


class DepoimentosController {
    static async salvar(req, res) {
        try {
            const id = req.usuarioId;
            const titulo = req.body.titulo;
            const mensagem = req.body.mensagem;

            const depoimento = await depoimentos.create({
                usuarioId: id,
                titulo: titulo,
                mensagem: mensagem
            });

            res.json({ depoimento });

        } catch (e) {
            res.status(500).json({
                error: e
            });
        }
    }

    static async listaMensagens(req, res) {
        try {
            const id = req.usuarioId;

            const depoimento = await depoimentos.findAll({
                where: {
                    usuarioId: id
                }
            });
            res.json({ depoimento });

        } catch (e) {
            res.status(500).json({
                error: e
            });
        }
    }

    static async lerMensagem(req, res) {
        try {
            const { id } = req.params;
            
            const depoimento = await depoimentos.findOne({
                where: {
                    id: id
                }
            });
            res.json({ depoimento });

        } catch (e) {
            res.status(500).json({
                error: e
            });
        }
    }

    static async testeListagem(req, res) {
        try {
            const depoimento = await depoimentos.findAll();
            res.json({ depoimento });
        } catch (e) {
            res.status(500).json({
                error: e
            });
        }
    }
}

module.exports = DepoimentosController