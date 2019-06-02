var express = require('express');
var router = express.Router();
var TeacherModel = require('../model/teacher');
var connection = require('../data/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('in teachers get');
  TeacherModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.post('/', function(req, res){
  console.log("in post");
  var t = new TeacherModel({
    name: req.body.name, 
    lname: req.body.lname,
    courses: req.body.courses,
    salary: req.body.salary
  })
  t.save().then(()=>console.log('Teacher was saved in DB'));
})

router.put('/salary', function(req, res){
  TeacherModel.findOneAndUpdate({name:req.body.name}, {$set: {salary:req.body.salary}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Teacher was updated to: ${doc}`);
    }
  })
})

router.put('/courses', function(req, res){
  TeacherModel.findOneAndUpdate({name:req.body.name}, {$set: {courses:req.body.courses}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Teacher was updated to: ${doc}`);
    }
  })
})

router.delete('/', function(req, res){
  TeacherModel.findOneAndDelete({name: req.body.name}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Teacher was deleted');
  }
})
})

module.exports = router;
