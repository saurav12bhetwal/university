const mongoose=require("mongoose")

 mongoose.connect("mongodb://127.0.0.1:27017/University").then(()=>{
    console.log("db successfully connected")
 }).catch((e)=>{
    console.log("errror occure while connecting")
 })
    
