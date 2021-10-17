import mongoose from "mongoose";

const orderSchema= new mongoose.Schema({
    Customer:{
        type:mongoose.Schema.ObjectId,
    ref:"Customer",
    },
    Product:{
         type:mongoose.Schema.ObjectId,
         ref:"Product"

     },
    nberOfProduct:{
        type:Number
    },

    orderedOn:{
        type:Date
    }
    

})
orderSchema.pre(/^find/, function(next){
    this.populate({
        path:"Customer",
        select:" firstName lastName email phone gender"
    }).populate({
        path:"Product",
        select:"Name Price Category"

    });

    next();
})
const orderInfo= mongoose.model("Order",orderSchema);

export default orderInfo;