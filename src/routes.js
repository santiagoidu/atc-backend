const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuario.controller')
const Produtos = require('./controllers/produtos.controller')
const Admin = require('./controllers/admin.controller')

// listagem de produtos
routes.get('/api/produtos', Produtos.index)

// criar usuarios e administradores
routes.post('/api/usuarios', Usuario.create)
routes.post('/api/admin', Admin.create)

// Criar um novo produto
routes.post('/api/produtos', Produtos.create)

// Apagar um produto
routes.delete('/api/produtos/:_id', Produtos.delete)

// Atualizar produtos
routes.put('/api/produtos', Produtos.update)

module.exports = routes;
