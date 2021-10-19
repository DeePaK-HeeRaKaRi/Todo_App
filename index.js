const express = require('express')

const app= express()

const port =8000

const db = require('./config/mongoose')

const todo = require('./models/todo')

app.use(express.urlencoded());

app.use('/', require('./routes'))

app.set('view engine','ejs')

app.set('views','./views')

app.use(express.static('assets'))

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the serer : ${err}`)
    }
    console.log(`Server is running on port : ${port}`)
})