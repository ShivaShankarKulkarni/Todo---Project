const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shivashankarkulkarni:Bunny%402001@learningmongodb.mypm2oj.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
};