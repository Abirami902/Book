import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    bookname:{
        type:String
    },
    author:{
        type:String
    },
    des:{
        type:String
    },
    rate:{
        type:Number
    },
    img:{
        type:String
    }
})


const User=mongoose.model('user',userSchema)
export default User