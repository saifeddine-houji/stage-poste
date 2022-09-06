const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true };
const connectDB = require('./config/db');
const userRoute = require('./routes/user.route');
const operationRoute = require('./routes/operation.route');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(bodyParser.json({limit : "50mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "50mb", extended : true}));
connectDB();
/*app.use(cors())*/
app.use(cors(corsOptions));
app.use(cookieParser());

//middlewares
app.use(userRoute);
app.use(operationRoute);


//error middleware
/*
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong!";
    return res.status(errorStatus).json(errorMessage);
})*/

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));



