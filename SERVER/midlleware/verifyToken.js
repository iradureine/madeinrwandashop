import TokenAuth from "../helper/tokenAuth";

const verifyToken=async(req,res,next)=>{
    const token = req.header("x-auth-token");
    if(!token){
        return res.status(404).json({
            status:404,
            message:"no token provided"
        })
    }
try{
    const Customer=TokenAuth.getDataFromToken(token);
    req.Customer=Customer;
    return next(); 
}
catch(err){
    console.log(err);
}
}

export default verifyToken;