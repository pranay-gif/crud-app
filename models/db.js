const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EmployeeDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongodb connection is sucessful");
}).catch((e)=>{
    console.log("no connection");
});
require('./employee.model');
