const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')



router.post('/create-todo',todoController.creating_todo) 

router.get('/', todoController.fetching_todo)

router.post('/delete-task', todoController.delete_todo)

module.exports =router;
