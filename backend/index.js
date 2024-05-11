// Write basic express boilerplate code,
const express = require("express");
const {createTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({}));

app.post("/todo",async function(req, res){
    const createPayload = req.body;
    const parsePayoad = createTodo.safeParse(createPayload);
    console.log(parsePayoad);
    console.log("First one");
    if (!parsePayoad.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        })
    }
    console.log("Second");
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully"
    })

    }
)

app.get("/",function(req,res){
    res.json({
        msg: "Hi there"
    })
})

app.get("/todos", async function (req,res) {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayoad.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        });
    return ;
    }
    await todo.update({
        _id: req.body.id,

    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);