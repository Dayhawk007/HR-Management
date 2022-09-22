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
        enum:["New","Screening","Interview","Hired","Rejected"],
        default:"New"
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'jobs'
    }
})

const applicationModel= mongoose.model("applications",applicationSchema);

export default applicationModel;