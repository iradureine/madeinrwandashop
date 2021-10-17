import express from "express";
import adminController from "../Controller/admincontroller.js";

const adminRouter=express.Router();

adminRouter.post("/register",adminController.register);

export default adminRouter;