import mongoose from "mongoose";
 const categorySchema= new mongoose.Schema({
     name:{
         type:String

     },
     description:{
         type:String
     }
 })

 const categoryInfo=mongoose.model("Category",categorySchema)

 export default categoryInfo;