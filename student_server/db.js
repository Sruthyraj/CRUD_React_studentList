const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Students",{useNewUrlParser:true}).then(()=>{
    console.log("DB Connected");
})

const studentSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    fname:String,
    lname:String,
    subject:String
})

const Student =mongoose.model("Student",studentSchema);
module.exports={
    Student
}