const mongoose = require('mongoose');

// connect to database

mongoose.connect('mongodb://localhost/todos')

// acquire the connection
const db = mongoose.connection;

// error handling

db.on('error',console.error.bind(console,'error in connecting to db'));

// if started the print

db.once('open',()=>{
    console.log('Successfully connected to database.')
})