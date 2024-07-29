import mongoose from "mongoose";

const BookSchema=new mongoose.Schema({
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


const Book=mongoose.model('Book',BookSchema)
export default Book