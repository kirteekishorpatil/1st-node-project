const express=require('express')
const router=express.Router()
//defined routers
const {getdata, postdata, putdata, deletedata}=require('../controler/logic')
router.get("/getdata",getdata)
router.post("/postdata",postdata)
router.put("/putdata",putdata)
router.delete("/deletdata/:id",deletedata)
// router.put("/putdata",putdata)
// router.delete("/deletdata",deletedata)

module.exports=router