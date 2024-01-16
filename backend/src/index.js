const express=require("express")
const router=require("../Routes/Router")
require("../db/db")
const app=express()
const port=5000;
app.use(router)
app.get(("/"),(req,res)=>{
res.send("hello")
})
app.listen(port,()=>{
    console.log("listing to port")
})
