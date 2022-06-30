const mongoose = require('mongoose');

// creating Schema for the tasks

const taskSchema = new mongoose.Schema({
    description: {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date: {
        type : Date,
        required : true
    }
});

// naming the Schema
const Task = mongoose.model('Task',taskSchema);

// exporting the schema

module.exports = Task;