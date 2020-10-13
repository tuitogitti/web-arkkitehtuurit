/*
 * Opiskelijan Mongoose model
 */
const mongoose = require('mongoose');

// alidokumentti
const Course = new mongoose.Schema({
  course_name: String,
  course_points: Number,
  grade: Number,
});

// dokumentti
const studentSchema = new mongoose.Schema({
  student_number: String,
  name: String,
  email: String,
  study_points: Number,
  courses: [Course],
});

// model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
