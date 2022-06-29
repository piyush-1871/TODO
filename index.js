const express = require('express');
const router = require('./routes');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes/index'));
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port , (err)=>{
    if(err){
        console.log('Error',err);

        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is up and running on port : ${port}`);
});