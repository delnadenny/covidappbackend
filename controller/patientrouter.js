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

router.get("/view",async(req,res)=>{
    let data=await patientmodule.find()
    res.json(data)

})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientmodule.find(input)
    res.json(data)
})

module.exports=router