import mongoose, { modelNames } from "mongoose";

const memorySchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    tag:{
        type: String,
        required:true
    },
    imageUrl:{
        type: String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    year:{
        type: String,
    }
})

export default mongoose.model("Memory",memorySchema)