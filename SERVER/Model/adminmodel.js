import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    Name:{
        type:String
    },
   email :{
      type:String
      
  } ,
  password:{
      type:String
  }

});

//adminSchema.pre(/^find/, function(next){
   // this.populate({
       // path:"Email",
        //select:" firstName lastName email phone gender"
    //}).populate({
       // path:"password",
        //select:" firstName lastName email phone gender career"

   // });

    //next();
//})

const adminInfo= mongoose.model("Admin",adminSchema)

export default adminInfo;