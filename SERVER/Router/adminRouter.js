import express from "express";
import adminValidator from "../midlleware/adminValidator.js"
import adminController from "../Controller/admincontroller.js";

const adminRouter=express.Router();

adminRouter.post("/register",adminValidator.newAccountRules(),
adminValidator.validateInput,adminController.register);
adminRouter.post("/login",adminController.adminlogin)
export default adminRouter;