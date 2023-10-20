const express=require("express");
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/forget",(req,res)=>{
    res.render("forget")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/signup",async (req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password,
        username:req.body.username,
        dob:req.body.dob,
        name:req.body.name,
        gender:req.body.gender

    }

    await collection.insertMany([data])

    res.render("home")


})

app.post("/login",async (req,res)=>{
    try{
        const check=await collection.findOne({email:req.body.email})
        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("Wrong Password")
        }

    }
    catch{
        res.send("wrong details")

    }

})

app.listen(3000,()=>{
    console.log("port connected")
})