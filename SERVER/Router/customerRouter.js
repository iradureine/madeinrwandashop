import express from "express";
import Validator from "../midlleware/validator.js";
import Customercontroller from "../Controller/customerController.js";
import verifyToken from "../midlleware/verifyToken.js";
import verifyAccess from "../midlleware/verifyaccess"
const customerRouter=express.Router();

customerRouter.post("/signup", Customercontroller.signup);
//Validator.newAccountRules(),
//Validator.validateInput//Validator.newAccountRules(),
//Validator.validateInput

customerRouter.post("/login",Customercontroller.login);
customerRouter.get("/allcustomer",verifyToken,verifyAccess("admin"),Customercontroller.getallcustomer);
customerRouter.get("/:id",Customercontroller.getonecustomer);
export default customerRouter;