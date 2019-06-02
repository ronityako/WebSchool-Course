var express = require('express');
var router = express.Router();
var StudentModel = require('../model/student');
var connection = require('../data/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  StudentModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.post('/', function(req, res){
  var s = new StudentModel({
    id: req.body.id, 
    name: req.body.name, 
    lname: req.body.lname,
    courses: req.body.courses,
    city: req.body.city
  })
  s.save().then(()=>console.log('Student was saved in DB'));
})

router.put('/', function(req, res){
  StudentModel.findOneAndUpdate({name:req.body.oldName}, {$set: {name:req.body.newName}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Student was updated to: ${doc}`);
    }
  })
})

router.delete('/', function(req, res){
  StudentModel.findOneAndDelete({name: req.body.name}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Student was deleted');
  }
})
})

module.exports = router;
