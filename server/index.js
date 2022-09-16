import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dashboard from './routes/dashboard.js';

const app=express()

const CONNECTION_URL="mongodb+srv://ayush:qaz12345@cluster0.nwcwoym.mongodb.net/?retryWrites=true&w=majority"

const PORT=5000;

app.use("/dashboard/",dashboard);
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message) );


