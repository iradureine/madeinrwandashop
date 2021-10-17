import {check, validationResult} from "express-validator";



class Validator{
   

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
          
          check("FirstName", "please your firstname have special character").isAlpha(),
          check("LastName","please your firstname have special character").isAlpha(),
          check("Email","please your email is invalid").isEmail(),
          check("gender","gender is invalid").isIn(['male','female']),
          check("Phone","your phone is invalid ").isMobilePhone(),
          check("Password","password must be strong").isStrongPassword()

        ];

    }
    static checkId(){
        return [check ("id","id should be mongoId").isMongoId(),
    ]
    }

    

}
export default Validator;