import customerInfo from "../Model/customermodel";
import TokenAuth from "../helper/tokenAuth.js"
import bcrypt from "bcrypt"

class Customercontroller{

static signup=async (req,res)=>{
    const saltRound=10;
        const hashPassword=bcrypt.hashSync(req.body.Password,saltRound);
        req.body.Password=hashPassword;
    const customer= await customerInfo.create(req.body);
    if (!customer){
        return res.status(404).json({
            status:404,
            message:"failed"
            })
    }
    return res.status(200).json({
        status:200,
        message:"successfully",
        data:customer
    })
}


static login=async (req,res)=>{
    const {Email,Password}=req.body;
    const customer=await customerInfo.findOne({Email:Email});
    if(!customer){
        return res.status(404).json({
            status:404,
            message:"failed to login",
        
        })
    }
    if(bcrypt.compareSync(Password,customer.Password)){
        const token =TokenAuth.tokenGenerator({
        id:customer._id,
        Email:customer.Email,
        
    })
    
return res.status(200).json({
        status:200,
        message:"successfuly logged in",
        token:token,
        data:customer
    })
    }
return res.status(404).json({
    status:404,
    message:"password is incorrect"
})
}
static getallcustomer=async(req,res)=>{
    const customer=await customerInfo.find({Role:"client"});
     if (!customer){
         return res.status(404).json({
             status:404,
             message:"failed",
             data:customer

         })
         
     }
     return res.status(200).json({
        status:200,
        message:"successful",
        data:customer  
      })
}
static getonecustomer=async (req,res)=>{
    const customer=await customerInfo.findById(req.params.id);
    if(!customer){
return res.status(404).json({
    status:404,
    message:"failed",
    data:customer

})
    }
    return res.status(200).json({
    status:200,
    message:"successful",
    data:customer

    })
}

}
export default Customercontroller;