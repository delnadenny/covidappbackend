const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        patientname:String,
        Phoneno:String,
        address:String,
        Status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)