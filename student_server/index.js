const express =require('express');
const cors=require('cors');
const dataservice =require('./dataservice')



const app=express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
app.get("/get",(req,res)=>{
   dataservice.getStudent().then((data)=>{
       res.status(201).json(data)
   })
    
})

app.post("/post",(req,res)=>{
    dataservice.postStudent(req).then((data)=>{
        res.status(201).json(data)
    })
     
 })

 app.delete("/delete/:_id",(req,res)=>{
     dataservice.deleteStudent(req.params._id).then(data=>{
         res.status(201).json(data)
     })
 })

 app.put("/update/:id",(req,res)=>{
     dataservice.putStudent(req.params.id,req).then(data =>{
         res.status(201).json(data)
     })
 })
app.listen(4000,()=>{
    console.log("listening @4000");
})