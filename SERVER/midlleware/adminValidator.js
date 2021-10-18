import {check, validationResult} from "express-validator";



class adminValidator{
   

    static validateInput= (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();
    }
    static newAccountRules(){
        return[
          
          check("Name", "please your firstname have special character").isAlpha(),
          check("email","please your email is invalid").isEmail(),
          check("password","password must be strong").isStrongPassword()
          ];

    }
    static checkId(){
        return [check ("id","id should be mongoId").isMongoId(),
    ]
    }

    

}
export default adminValidator;