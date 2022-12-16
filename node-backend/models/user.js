import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    height:{
       type: Number,
       required: true
    }, 
})

export default mongoose.model('User',userSchema)