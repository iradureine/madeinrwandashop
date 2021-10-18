import adminInfo from "../Model/adminmodel.js";
import TokenAuth from "../helper/tokenAuth.js"
import bcrypt from "bcrypt"
class adminController{

    static register=async (req,res)=>{
         const saltRound=10;
        const hashPassword=bcrypt.hashSync(req.body.password,saltRound);
        req.body.password=hashPassword;
        const admin= await adminInfo.create(req.body);
        if (!admin){
            return res.status(404).json({
                status:404,
                message:"failed"
                })
        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:admin
        })
    }

static adminlogin=async (req,res)=>{
    const {email,password}=req.body;
    const admin=await adminInfo.findOne({email:email});
    if(!admin){
        return res.status(404).json({
            status:404,
            message:"failed to login",
        
        })
    }
    if(bcrypt.compareSync(password,admin.password)){
        const token =TokenAuth.tokenGenerator({
        id:admin._id,
        email:admin.email,
        
    })
    
return res.status(200).json({
        status:200,
        message:"successfuly logged in",
        token:token,
        data:admin
    })
    }
return res.status(404).json({
    status:404,
    message:"password is incorrect"
})
}

    }

export default adminController;
