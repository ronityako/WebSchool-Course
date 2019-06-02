const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({ 
    name: String, 
    lname: String,
    courses: Array,
    salary: Number
});

module.exports = mongoose.model('Teacher', TeacherSchema);