const mongoose =require('mongoose')
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    todoDate:{
        type:String
    },
    Category :{
        type:String,
    }
})
const Todo_S = mongoose.model('TODO_APP',todoSchema)


 module.exports = Todo_S
