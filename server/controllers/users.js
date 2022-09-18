import User from '../models/users.js'
import { validateEmail,validateLength } from '../helpers/validation.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
export const register = async (req,res) =>{
    try{
    const {name,email,
    password,isHR}=req.body;
    if(!validateEmail(email)){
        res.status(400).json({
            "error":"Invalid Email Address"
        });
        return;
    }
    const check= await User.findOne({ email});
    if(check){
        return res.status(500).json({
            "error":"User already exists"
        });
    }
    if(!validateLength(name,3,30)){
        return res.status(500).json({
            "error":"username needs to be in range 3-30"
        });
    }
    if(!validateLength(password,8,60)){
        return res.status(500).json({
            "error":"password needs to be in range 8-60"
        });
    }
    const cryptedPassword=await bcrypt.hash(password,12);
    const user= await new User({
        name,
        email,
        "password":cryptedPassword,
        isHR
    }).save();
    res.json(user);
    }
    catch(error){
        res.status(500).json({"message":error.message});
    }
};


export const login = async (req,res) =>{
    try {
        const{
            email,password
        }=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json(
                {
                    "message":"User doesn't exist"
                }
            )
        }
        const check= await bcrypt.compare(password,user.password);
        if(check){
            //const token=jwt.sign(user._id,process.env.TOKEN_SECRET);
            return res.status(200).json({
                "username":user.name,
                "email":user.email,
                "password":user.password,
                "isHR":user.isHR,
            });
        }
        res.status(400).json({
            "message":"Password incorrect",
        })
        
    } catch (error) {
        return res.status(400).json({
            "error":error,
        })
    }
    
}