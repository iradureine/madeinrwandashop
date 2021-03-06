import productInfo from "../Model/productModel.js";

class Productcontroller{
static register=async (req,res)=>{
    const product=await productInfo.create(req.body);
    if (!product){
        return res.status(404).json({
            status:404,
            message:"failed"
            })
    }
    return res.status(200).json({
        status:200,
        message:"successfully",
        data:product
    })
}
static allproduct=async( req,res)=>{
    const product=await productInfo.find();
     if (!product){
         return res.status(404).json({
             status:404,
             message:"failed"
         })
         
     }
     return res.status(200).json({
        status:200,
        message:"successful",
        data:product  
      })
}
static deleteproduct = async(req,res)=>{
    const product= await productInfo.findByIdAndDelete(req.params.id);
    if(!product){
        return res.status(404).json({
            status:404,
            message:"failed to delete"
        })

    }
    return res.status(200).json({
        status:200,
        message:"successfully",
        data:product

    })
}
}
export default Productcontroller;