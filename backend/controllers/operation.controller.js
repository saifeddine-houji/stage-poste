const Operation = require('../models/operation.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const createOperation = (req,res)=>{
    if(!req.body)
        return res.status(400).json({err:'project required'});
    const dataString = new Operation({
        operationType:req.body.operationType,
        operationInfo:JSON.stringify(req.body.operationInfo)
    });


    Operation.create(dataString)
        .then(operation=>{

            User.findByIdAndUpdate(req.user.id,{$push:{PerformedOperations:operation._id}})
                .catch(err=>{return res.status(500).json({msg:'internal server error',err:err})})
            return res.status(200).json({operation:operation})
        })
        .catch(err=>{return res.status(500).json({err:err})})
}

const getOperationById = (req,res)=>{
    if(!req.params.idOperation)
        return res.status(400).json('user id required');
    Operation.findById(req.params.idOperation,(err,result)=>{
        if (err) {
            return res.status(400).json(err);
        }

        //the parameters for the object *operation* will be set in the html forms
        const operationData = {
            id: result._id,
            operationType:result.operationType,
            operationInfo: JSON.parse(result.operationInfo),
            createdAt:result.createdAt,
            updatedAt:result.updatedAt,
        };

        //console.log(operationData.operation.amount)

        return res.status(200).json(operationData);
    })
}

//starting this line, all of these will be Admin restricted functionnalities

const listOperations = async (req,res)=>{
    const list = await Operation.find();

    if(!list)
        return res.status(500).json('oops! something went wrong.');
    return res.status(200).json(list);
}



const deleteOperation = async (req,res)=>{
    const result = await Operation.deleteOne({_id:req.params.id});
    if(result)
    {
        return res.status(200).json("the operation has been successfully deleted")
    }
    return res.status(500).json("oups, something went wrong!")
}



module.exports={createOperation,deleteOperation,getOperationById,listOperations}