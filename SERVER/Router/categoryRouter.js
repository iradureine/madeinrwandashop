import express from "express";
import categoryController from "../Controller/categorycontroller";

const categoryRouter=express.Router();

categoryRouter.post("/register",categoryController.register);

export default categoryRouter;