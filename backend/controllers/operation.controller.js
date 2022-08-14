const Operation = require('../models/operation.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const createOperation = (req,res)=>{
    if(!req.body)
        return res.status(400).json({err:'project required'});
    const dataString = new Operation({
        operation:JSON.stringify(req.body)
    });


    Operation.create(dataString)
        .then(operation=>{
            console.log(operation)
            console.log(req.user.id)
            User.findByIdAndUpdate(req.user.id,{$push:{PerformedOperations:operation._id}})
                .catch(err=>{return res.status(500).json({msg:'internal server error',err:err})})
            return res.status(200).json({operation:operation})
        })
        .catch(err=>{return res.status(500).json({err:err})})
}

const deleteOperation = async (req,res)=>{
    const result = await User.deleteOne({_id:req.user.id});
    if(result)
    {
        return res.status(200).json("the operation has been successfully deleted")
    }
    return res.status(500).json("oups, something went wrong!")
}



module.exports={createOperation}