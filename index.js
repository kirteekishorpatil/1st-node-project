const express=require('express')
const router=require('./router/router')
const bodyparser=require("body-parser")
const port=5000;
const app=express()
// app.use('/',router)
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',router)
app.listen(port,()=>{
    console.log(`server starts at port no ${port}`)
})
