import cors from "cors";
import express  from "express";
import  mongoose from "mongoose";
import customerRouter from "./SERVER/Router/customerRouter.js";
import orderRouter from "./SERVER/Router/orderRouter.js"
import productRouter from "./SERVER/Router/productrouter.js";

import categoryRouter from "./SERVER/Router/categoryRouter.js";
import dotenv from "dotenv";
import multer from "multer";
import bodyParser from "body-parser"


 dotenv.config({path:'.env'});
 const app=express();
 app.use(cors());
 app.use(bodyParser.json());
 app.set("view engine", "ejs");

 
  
//const storage = multer.diskStorage({
    //destination: (req, file, callback) => {
        //cb(null, 'uploads')
    //},
    //filename: (req, file, callback) => {
        //cb(null, file.fieldname + '-' + Date.now())
    //}
//});
  const upload = multer({
    dest:"./upload/images" });

app.post("/upload", upload.single("profile"),(req,res)=>{
    console.log(req.file)
})
 app.use("/madeinrwandashop/v1/customer",customerRouter);

 app.use("/madeinrwandashop/v1/order",orderRouter);
app.use("/madeinrwandashop/v1/product",productRouter);
 
 app.use("/madeinrwandashop/v1/category",categoryRouter);

 app.use('/',(req,res)=>{
    res.status(404).send({
    status:404,
    message:"this routes does'nt exist"
    })
})

 const databaseUrl=process.env.DATABASE;
 mongoose.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("database is connected sucessfully"));
 const port=process.env.PORT
 app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
 })


export default app;