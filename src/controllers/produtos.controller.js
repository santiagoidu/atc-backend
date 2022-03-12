const Produtos = require('../models/produtos.models')

module.exports = {
    async index(req, res){
        const user = await Produtos.find();

        res.json(user)
    },
    async create(req, res){
      const {modelo, tipo, foto, produto, preco } = req.body;

      let data = {}

      let user = await Produtos.findOne({nome_produto});
      if(!user){
          data = {modelo, tipo, foto, produto, preco }
          user = Produtos.create(data)
          return res.status(200).json(user)
      } else {
          return res.status(500).json(user)
      }
    },
    async delete(req, res){
        const { _id } = req.params

        const user = await Produtos.findById({_id});

        return res.json(user);
    },
    async update(req, res){
        const { _id, modelo, tipo, foto, produto, preco } = req.body;

        const data = {modelo, tipo, foto, produto, preco};

        const user = await Produtos.findByIdAndUpdate({_id}, data, {new: true})

        res.json(user)
    }
}