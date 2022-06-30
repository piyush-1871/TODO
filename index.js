// require express for setting up the server
const express = require('express');
const path = require('path');
// importing the data base
const db = require('./config/mongoose');
// importing the Schema
const Task = require('./models/task');
// using express
const app = express();
// setting up the port
const port = 8000;
// using static files
app.use(express.static('assets'));
// set up the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// middleware
app.use(express.urlencoded());

// rendering app page
app.get('/',(req,res)=>{
    Task.find({},(err,task)=>{
        if(err){
            console.log('Error in fetching task from db.');
            return;
        }

        return res.render('home',{
            title : "Home",
            task : task
        })
    })
})


// creating Task

app.post('/create-task',(req,res)=>{
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date: req.body.date
    },(err,newtask)=>{
        if(err){
            console.log('error in creating the task',err);
            return;
        }
        return res.redirect('back');
    })
})



// deleting task
app.get('/delete-task',(req,res)=>{
    // getting id from query
    let id = req.query;
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0;i<count;i++){
        Task.findByIdAndDelete(Object.keys(id)[i],(err)=>{
            console.log('error in deleting the task.');
            return;
        })
    }
    return res.redirect('back');
})


// make the app listen on assigned port number
app.listen(port , (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is up and running on port : ${port}`);
});