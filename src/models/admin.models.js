const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
    email_admin: String,
    senha_admin: String,
},{
    timestamps: true
})

DataSchema.pre('save', function(next){
    if(!this.isModified("senha_admin")){
        return next();
    }
    this.senha_admin = bcrypt.hashSync(this.senha_admin, 10);
    next()
})

const admin = mongoose.model('Admin', DataSchema);
module.exports = admin;