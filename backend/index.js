const express = require('express');
const app = express();
app.use(express.json());
const {createTodo} = require('./types');
const {updateTodo} = require('./types');
const {todos} = require('./db');
const cors = require('cors');
app.use(cors());


app.post("/create",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "you sent wrong inputs"
        })
        return;
    }
    await todos.create({
        title : createPayload.title,
        description : createPayload.description
    })

    res.json({
        msg : "Todo created"
    })
})

app.get("/todos",async (req,res)=>{
    const allTodos = await todos.find();
    res.json({
        allTodos 
    })
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "you sent wrong inputs"
        })
        return;
    }
    await todos.update({ // update syntax require 2 arguments . 1st - what needs to be changed , 2nd - what should be the changed thing
        _id: req.body.id
    },{
        completed : true
    })
    req.json({
        msg : "Todo marked as completed"
    })
})

app.listen(3002)