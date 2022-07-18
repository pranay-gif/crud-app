require('./models/db');
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser= require("body-parser");

const express = require("express");
const employeeController = require("./controllers/employeeController");
const app = express();
app.use(bodyparser.urlencoded({
   extended:true
  }));
app.use(bodyparser.json());
app.use('/employee',employeeController);  
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs', exphbs.engine({ extname : 'hbs' ,defaultLayout: 'mainLayout', LayoutsDir : __dirname + '/views/Layouts/'}));
app.set('view engine','hbs');
app.listen(3000,()=>{
      console.log("Express serever is statrted port no 3000 ");
  });