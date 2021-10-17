import express from "express"
import ProductController from "../Controller/productController.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        cb(null, 'uploads')
    },
    filename: (req, file, callback) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({
    dest:"./upload/images" });


const productRouter=express.Router();

productRouter.post("/create",upload.single("profile"),ProductController.register);

productRouter.get("/getallproduct", ProductController.allproduct)


export default productRouter;