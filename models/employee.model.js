const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema= new mongoose.Schema({
    fullname: {
        type: String
    },
    email:{
        type: String
    },
    mobile: {
        type: String
    },
    city:{
        type: String
    }
});

const emp = mongoose.model('Employee',employeeSchema);
module.exports = emp;