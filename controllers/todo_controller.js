const todo_s = require('../models/todo')
 

module.exports.creating_todo =function(req,resp){
    todo_s.create({
        description:req.body.description,
        Category    :req.body.Category,
        todoDate    :req.body.todoDate    
    },function(err,newtodo){
        if(err){
            console.log(`Error in creating a todo app:${err}`)
            return
        }
        console.log('***********',newtodo)
        return resp.redirect('/')
    })
     
}

module.exports.fetching_todo=function(req,resp){
    todo_s.find({},function(err,todo_f){
        if(err){
            console.log(`Error in Fetching Tasks From Database`)
            return
        }
        return resp.render('home',{
            title : 'Todo App',
            fetched : todo_f
        });
    })
}

module.exports.delete_todo=function(req,resp){
    let  id=req.body.delete_task
    // let id = req.query.id
    console.log(req.body)
    todo_s.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in Deleting An Object from Database")
            return;
        }
        return resp.redirect('/');
    });
}

