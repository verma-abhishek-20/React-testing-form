import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ForRough")

const userSchema=new mongoose.Schema({
    name:String,
    email:String
})
export default mongoose.model("user",userSchema)