const Operation = require('../models/operation.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');


const createOperation = (req,res)=>{
    if(!req.body)
        return res.status(400).json({err:'project required'});
    Operation.create(req.body)
        .then(operation=>{
            User.findByIdAndUpdate(req.user._id,{$push:{PerformedOperations:operation._id}})
                .catch(err=>{return res.status(500).json({msg:'internal server error',err:err})})
            return res.status(200).json({operation:operation})
        })
        .catch(err=>{return res.status(500).json({err:err})})
}

module.exports={createOperation}