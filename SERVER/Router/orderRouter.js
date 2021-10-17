import express from "express"
import orderController from "../Controller/ordercontroller";

const orderRouter=express.Router();

orderRouter.post("/create",orderController.createOrder);



export default orderRouter;