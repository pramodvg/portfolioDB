import mongoose  from "mongoose";

const serviceScema = mongoose.Schema(
    {
        title1:{type:String, require: true},
        title2:{type:String, require:true},
        description:{type:String,require:true}
    },
     {
        timestamps: true
    }
)

export default mongoose.model('Servicedata', serviceScema)