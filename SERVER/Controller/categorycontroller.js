import categoryInfo from "../Model/categorymodel.js";

class categoryController{

    static register=async (req,res)=>{
        const category= await categoryInfo.create(req.body);
        if (!category){
            return res.status(404).json({
                status:404,
                message:"failed"
                })
        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:category
        })
    }
    }

export default categoryController;
