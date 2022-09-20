import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true,
            trim:true
        },
        last_name:{
            type:String,
            required:true,
            trim:true
        },
        name: {
            type: String,
            required: true,
            trim:true,
            unique:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim:true
        },
        password: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            enum:["HR","Design","Development","Marketing"],
            required: true,
        },
        profilePic:{
            type:String,
            default:"https://static.vecteezy.com/system/resources/previews/001/840/618/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
        }
    },
    {
        timestamps:true
    }
)

const users=mongoose.model("users",userSchema);

export default users;