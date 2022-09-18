import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dashboard from './routes/dashboard.js';
import jobroute from './routes/jobs.js';
import user from './routes/users.js';
import dotenv from 'dotenv';
const app=express()

dotenv.config();
const CONNECTION_URL=process.env.MONGODB_URL;

const PORT=process.env.PORT || 5000;
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/dashboard/",dashboard);
app.use("/jobs/",jobroute);
app.use("/user/",user);

mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message) );


