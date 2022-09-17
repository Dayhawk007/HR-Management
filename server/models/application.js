import mongoose from "mongoose";

const applicationSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    status:{
        type: String,
        enum:["New","Screening","Testing","Interview","Hired","Rejected"],
        required:true
    },
    details:{
        type:String,
        required:true
    }
})