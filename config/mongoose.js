const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo_app_db')
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error connectiong to database !!!'))
db.once('open',function(){
    console.log('Successfully connected to database')
})