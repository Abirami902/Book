import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Name:{
        type:String
    },
    Place:{
        type:String
    },
    Phone:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})


const User=mongoose.model('user',userSchema)
export default User