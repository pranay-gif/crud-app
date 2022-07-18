const express= require("express");
const router = express();
const mongoose= require("mongoose");
const Employee= mongoose.model("Employee");
 router.get('/',(req,res)=>{
     res.render("employee/addOredit",{
         viewTitle: "Insert Employee"
     });
 });
router.post("/",(req,res)=>{
    var e = new Employee();
    // console.log(req.body);
  e.fullname = req.body.fullname;
  e.email = req.body.email;
  e.mobile = req.body.mobile;
  e.city = req.body.city;
  e.save((err,doc)=>{
      if(!err) 
      res.redirect('/employee/list');
      else{
          console.log("error during record insertion : " +err);
      }
  });
});

// function insertRecord(req, res){
//   var e = new Employee();
//   e.fullname = req.body.fullname;
//   e.email = req.body.email;
//   e.mobile = req.body.mobile;
//   e.city = req.body.city;
//   e.save((err,doc)=>{
//       if(!err) 
//       res.redirect('/employee/list');
//       else{
//           console.log("error during record insertion : " +err);
//       }
//   });

// }

//  router.get('/update/:id',(req,res)=>{
//      Employee.findById(req.params.id,(err,doc)=>{
//          if(!err){
//              res.redirect('/employee');
//          }
//          else{ console.log(" Error in employee update : " +err);}
//      });
//  });
router.get("/update/:id",(req,res)=>{
    Employee.findOneAndUpdate({_id: req.params._id}, req.body,{new: true},(err,doc)=>{
        if(!err) { res.redirect('http://localhost:3000/employee');}
        else { console.log('error during record update: ', + err);}
    });
})

router.get('/list',(req,res)=>{
    
    Employee.find((err,docs)=>{
        if(!err){
            res.render("employee/list",{
                list:docs
            });
        }
        else {
            console.log('Error in employee list :' + err);
        }
    }).lean()

});
router.get('/:id',(req,res)=>{
    
    Employee.findById((req.params.id,(errr,doc)=>{
        if(!err){
            res.render("employee/addOredit",{
                viewTitle:"Update Employee",
                employee: doc
            });
        }
        
    }))
 });
 router.get('/delete/:id',(req,res)=>{
     Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
         if(!err){
             res.redirect('/employee/list');
         }
         else{ console.log(" Error in employee delete : " +err);}
     });
 });

module.exports= router;
