const express = require('express');
const app = express();
app.use(express.json());
const z = require('zod');
const createTodo = require('./types')
const updateTodo = require('./types')



app.post("/create",(req,res)=>{
    
})

app.get("/see",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})