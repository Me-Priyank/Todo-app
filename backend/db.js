const mongoose = require('mongoose');

mongoose.connect('your mongodb instance/todos');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todos = mongoose.model('todos',todoSchema)

module.exports =  {
    todos
}