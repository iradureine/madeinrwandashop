import orderInfo from "../Model/ordermodel.js"


class orderController{

    static createOrder=async(req,res)=>{
        const order=await orderInfo.create(req.body)
        if(!order){
            return res.status(404).json({
                status:404,
                message:"failed to make order"
            })
        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:order
        })
    }
    static getallorder = async(req,res)=>{
        const order= await orderInfo.find({Customer:req.Customer.id});
        if(!order){
            return res.status(404).json({
                status:404,
                message:"failed"
            })

        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:order

        })
    }

}

export default orderController;