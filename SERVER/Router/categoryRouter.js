import express from "express";
import categoryController from "../Controller/categorycontroller.js";

const categoryRouter=express.Router();

categoryRouter.post("/register",categoryController.register);

export default categoryRouter;