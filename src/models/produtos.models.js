const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    modelo: String,
    tipo: String,
    foto: File,
    produto: String,
    preco: String
},{
    timestamps: true
})

const produtos = mongoose.model('Produtos', DataSchema);
module.exports = produtos;
