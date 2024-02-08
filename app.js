const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controller/patientrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://delna2001:anled2001@cluster0.pt1yp0m.mongodb.net/patientDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

//routing
app.use("/api/patient",patientrouter)



app.listen(3001,()=>{
    console.log("server running....")
})