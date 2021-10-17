import mongoose from "mongoose";

const CustomerSchema= new mongoose.Schema({
    FirstName:{
        type:String,
        required:[true,"firstname is required"]},

        LastName:{
            type:String,

        },
        Email:{
            type:String,
            required:[true,"email is required"],
        unique:true},
        gender:{type:String,
            enum:["female","male"]},

        Password:{
            type:String},
        Phone:{
            type:String

        },
        Role:{
            type:String
            //enum:["client","supplier","admin"],
            //default:["client"]

        }


})
const customerInfo= mongoose.model("Customer",CustomerSchema);

export default customerInfo;