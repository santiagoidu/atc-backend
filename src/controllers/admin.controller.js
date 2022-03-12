const Admin= require('../models/admin.models')

module.exports = {
    index(req, res){
        const user = Admin.find();

        res.json(user)
    },
    async create(req, res){
      const { email_admin, senha_admin } = req.body;

      let data = {}

      let user = await Admin.findOne({email_admin});
      if(!user){
          data = { email_admin, senha_admin }
          user = await Admin.create(data)

          return res.status(200).json(user)
      }else {
          return res.status(500).json(user)
      }
    }
}