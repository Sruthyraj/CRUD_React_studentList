const mongoose = require("mongoose");
const { Student } = require("./db");

getStudent = () => {
  return Student.find({}).then((data) => {
    return data;
  });
};

postStudent = (req) => {
  const new_std = new Student({
    _id: new mongoose.Types.ObjectId(),
    fname: req.body.fname,
    lname: req.body.lname,
    subject: req.body.subject,
  });
  return new_std.save().then((data) => {
    return {
      message: "Data updated in the server successfully",
    };
  });
};

deleteStudent = (id) => {
  return Student.findByIdAndRemove({ _id: id }).then((data) => {
    return {
      message: "Deleted sucessfully",
    };
  });
};


putStudent = (id,req) => {
    let new_std = {
      fname: req.body.fname,
      lname: req.body.lname,
      subject: req.body.subject,
    };
    return Student.findByIdAndUpdate({_id:id},{$set:new_std},{ new: true }).then((data) => {
      return {
        message: "Data updated in the server successfully",
      };
    });
  };

module.exports = {
  getStudent,
  postStudent,
  deleteStudent,
  putStudent
};
