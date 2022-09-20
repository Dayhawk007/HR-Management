import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        status:{
            type:Boolean,
            required:true,
            default:false,
        },
        startTime:{
            type:Date,
            required:true,
        },
        endTime:{
            type:Date,
            required:true,
        }
    }
);

const tasks=mongoose.model("tasks",taskSchema);

export default tasks;