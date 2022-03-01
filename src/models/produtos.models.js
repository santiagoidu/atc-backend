const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome_produto: String,
    tipo: String,
    valor: String,
    marca: String,
},{
    timestamps: true
})

const produtos = mongoose.model('Produtos', DataSchema);
module.exports = produtos;