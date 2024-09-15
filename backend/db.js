const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('...');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.modle('todo',todoSchema)

module.exports =  {
    todo
}