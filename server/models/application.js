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
    candidateStatus:{
        type: String,
        enum:["New","Screening","Testing","Interview","Hired","Rejected"],
        required:true,
        default:"New"
    },
    detail:{
        type:String,
        required:true
    }
})