const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "pname":String,
    "pid":String,
    "pbrand":String,
    "price":String
})

let productsmodel=mongoose.model("products",schema);
module.exports={productsmodel}