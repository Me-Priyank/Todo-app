const express = require('express');
const app = express();
app.use(express.json());
const {createTodo} = require('./types');
const {updateTodo} = require('./types');
const {todo} = require('./db');


app.post("/create",(req,res)=>{
    const {createPayload} = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "you sent wrong inputs"
        })
        return;
    }
})

app.get("/see",(req,res)=>{

})

app.put("/completed",(req,res)=>{
    const {updatePayload} = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "you sent wrong inputs"
        })
        return;
    }
})