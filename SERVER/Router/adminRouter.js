import express from "express";
import adminController from "../Controller/admincontroller";

const adminRouter=express.Router();

adminRouter.post("/register",adminController.register);

export default adminRouter;