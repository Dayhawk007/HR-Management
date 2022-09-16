import mongoose, { mongo } from "mongoose";

const jobSchema= mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    designation:{
        type:String,
        required:true,
    },
    numberOfCandidates:{
        type:Number,
        required:true,
    },
    typeOfJob:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true,
    },
})

const jobs=mongoose.model("jobs",jobSchema);

export default jobs;