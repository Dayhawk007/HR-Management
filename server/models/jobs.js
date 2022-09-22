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
    applications:[
        {type: mongoose.Schema.Types.ObjectId,ref:'appplications'}
    ],
    datePosted:{
        type:Date,
        required:true,
    },
    lastDate:{
        type:Date,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    quota:{
        type:Number,
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