const express = require('express');  
const port = 8000;

const cooKieParser = require('cookie-parser');
const  app = express();
// use express router
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

const db = require("./config/mongoose");
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use('/',require('./routes'));

//setting up view engine.
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("error in server");
    } 
    console.log("sdcd:",port);
});
