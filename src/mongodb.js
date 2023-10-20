const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/ShineyWiseDB")
.then(()=>{
    console.log("mongodb connected")
})

.catch(()=>{
    console.log("failed to connect")
})

const LogInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection