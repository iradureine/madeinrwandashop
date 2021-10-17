import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
Name:{
    type:String
},
productImage:
    {
        type: String,},
Price:{
    type:Number,
},
Category:{
   type:mongoose.Schema.ObjectId,
  ref:"Category"

},
Admin:{
    type:mongoose.Schema.ObjectId,
    ref:"Admin"

},
nberOfProduct:{
    type:Number
},
});

productSchema.pre(/^find/, function(next){
    this.populate({
        path:"Admin",
        select:"Name email"
    }).populate({
        path:"Category",
        select:"name description"

    });

    next();
})
const productInfo=mongoose.model("Product",productSchema);

export default productInfo;