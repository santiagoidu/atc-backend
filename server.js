const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000

const uri = "mongodb+srv://dbAtc:pgLc6vPUaLufalAx@cluster0.fsuru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
}, function (err){
    if(err){
         console.log(err)
    } else{
        console.log('MongoDB conectado com sucesso')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes)

app.listen(port, function (){
console.log(`server runing on port ${port} `)
})