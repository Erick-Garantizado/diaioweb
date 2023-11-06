const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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

            res.status(201).json({
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
                    email: req.body.email
                }
            });
            
            if (usuario) {
                const senhaCorreta = await bcrypt.compare(
                    req.body.senha, 
                    usuario.senha
                )
                
                if (senhaCorreta) {
                    const token = await jwt.sign(
                        usuario.id, 
                        process.env.JWT_KEY
                    )
                    res.json({ token });
                } else {
                    res.status(401).json({
                        error: 'Usuário ou senha inválida'
                    })
                }
            } else {
                res.status(401).json({
                    error: 'Usuário ou senha inválida'
                })
            }
           
        } catch (e) {
            res.status(500).json({
                error: e.message 
            });
        }
    }

    static getUsuario(req, res) {
        const token = req.headers['authorization']
        console.log(token)
        jwt.verify(token, process.env.JWT_KEY, async (error, success) => {
            if (error) {
                res.status(401).json({
                    error: 'Token inválido'
                })
            } else {
                const usuario = await User.findByPk(success);
                res.json({ 
                    nome: usuario.nome,
                    sexo: usuario.sexo
                 });
            }
        });
    }

    static validaToken(req, res, next) {
        const token = req.headers['authorization']
        jwt.verify(
            token, 
            process.env.JWT_KEY, 
            async (error, success) => {
                if (error) {
                    res.status(401).json({
                        error: 'Token inválido'
                    })
                } else {
                    const usuario = await User.findByPk(success);
                    req.usuarioId = success;
                    next()
                }
            }
        )
    }
}

module.exports = UsuariosController