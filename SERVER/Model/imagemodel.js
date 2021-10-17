import mongoose from"mongoose";
  
const imageSchema = new mongoose.Schema({
    name:{ 
        type:String,
    },
    desc:{type:String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
const imageInfo= mongoose.model('Image', imageSchema);

export default imageInfo;