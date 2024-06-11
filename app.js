const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {productmodel}=require("./models/product")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hannasherin:Alazhar4@cluster0.agtcb.mongodb.net/productDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let product=new productmodel(input)
    product.save()
    console.log(product)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    productmodel.find().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
})


app.listen(8082,()=>{
    console.log("server started")
})