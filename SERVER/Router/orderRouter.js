import express from "express"
import orderController from "../Controller/ordercontroller.js";
import verifyAccess from "../midlleware/verifyaccess.js";
import verifyToken from "../midlleware/verifyToken"
const orderRouter=express.Router();

orderRouter.post("/create",orderController.createOrder);
orderRouter.get("/:id/order", verifyToken,verifyAccess("Customer"),orderController.getallorder);


export default orderRouter;