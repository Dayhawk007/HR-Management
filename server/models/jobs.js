import mongoose, { mongo } from "mongoose";

const jobSchema= mongoose.Schema({
    title:{
        required:true,
        type:String,
        trim:true
    },
    designation:{
        type:String,
        enum:["HR","Design","Development","Marketing"],
        required:true,
        trim:true
    },
    numberOfCandidates:{
        type:Number,
        default:0,
    },
    typeOfJob:{
        type:String,
        enum:["Full time","Part time","Freelance","Internship"],
        required:true,
        trim:true
    },
    companyName:{
        type:String,
        required:true,
        trim:true
    },
    Applications:{
        type:Array,
    },
    datePosted:{
        type:Date,
        required:true,
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    salary:{
        type:String,
        required:true,
        trim:true
    },
},
    {
        timestamps:true,
    })

const jobs=mongoose.model("jobs",jobSchema);

export default jobs;