import adminInfo from "../Model/adminmodel.js";
class adminController{

    static register=async (req,res)=>{
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
    }

export default adminController;
