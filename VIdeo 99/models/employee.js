const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  inManger: Boolean,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
