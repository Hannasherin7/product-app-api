const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "pname":{type:String,required:true},
    "pid":{type:String,required:true},
    "pbrand":{type:String,required:true},
    "price":{type:String,required:true}
})

let productmodel=mongoose.model("products",schema);
module.exports={productmodel}