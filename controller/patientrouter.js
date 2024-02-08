const express=require("express")
const router=express.Router()
const patientmodule=require("../models/patientmodel")

router.post("/add",async(req,res)=>{
    let data=req.body //for reading
    let patient=new patientmodule(data) //object creation
    let result=await patient.save()

    res.json(
        {
            status:"succes"
        }
    )
    
})

module.exports=router