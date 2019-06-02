const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    id: Number, 
    name: String, 
    lname: String,
    courses: Array,
    city: String
});

module.exports = mongoose.model('Student', StudentSchema);