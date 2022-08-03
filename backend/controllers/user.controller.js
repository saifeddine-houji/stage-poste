const User = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const validationRegister=require('../utils/validateRegister');


const {registerUser,confirm} = require('./Auth');

const getUserById = (req,res)=>{
    if(!req.params.idUser)
        return res.status(400).json('user id required');
    User.findById(req.params.idUser,(err,result)=>{
        if (err)
            return res.status(400).json(err);
        return res.status(200).json(result);
    })
}




/*    async (req,res)=>{
    if(!req.body)
        return res.status(400).json('user data required!');
    User.create(req.body,(err,result)=>{
        if(err)
            return res.status(500).json(err);
        return res.status(200).json(result);
    })
}*/

const listUsers = async(req,res)=>{
    const list = await User.find();

    if(!list)
        return res.status(500).json('oops! something went wrong.');
    return res.status(200).json(list);
}

const deleteUser = async(req,res)=>{
    if(!req.params.idUser)
        return res.status(400).json('user id required');

    const result = await User.deleteOne({_id:req.params.idUser});
    if (result)
        return res.status(200).json(result);
    return res.status(500).json('oops! something went wrong.');
}

module.exports={getUserById,registerUser,listUsers,deleteUser,confirm}

