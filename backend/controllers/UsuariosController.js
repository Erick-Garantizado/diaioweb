const { User } = require('../models');
const bcrypt = require('bcrypt');

class UsuariosController {
    static async cadastrar(req, res) {
        try {
            const salt = await bcrypt.genSalt(12);
            const senhaHashed = await bcrypt.hash(req.body.senha, salt);            
        
            const usuario = await User.create({
                nome: req.body.nome,
                email: req.body.email,
                sexo: req.body.sexo,
                senha: senhaHashed,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            res.json({
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                sexo: usuario.sexo,
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async login(req, res) {
        try {
            const usuario = await User.findOne({
                where: {
                    email: req.body.email,
                }
            });

           res.json(usuario)
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
}

module.exports = UsuariosController