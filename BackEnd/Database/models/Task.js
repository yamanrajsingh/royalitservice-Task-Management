const mongoose = require('mongoose');

const Task = new mongoose.Schema({  
    title:String,
    description:String,
    status:Boolean,
    date:String
})

const TaskSchema = mongoose.model("Task",Task);
module.exports = TaskSchema;