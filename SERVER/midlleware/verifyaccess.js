const verifyAccess = function(requiredRole){
    return async(req,res,next)=>{
        try{
            const Role = req.Customer.Role;
            if(requiredRole !== Role){
                return res.status(403).json({
                    status:403,
                    message:"you are not authorized"
                })
            }
            return next();
        }
        catch(err){
            console.log(err);
        }
    }
}
export default verifyAccess;