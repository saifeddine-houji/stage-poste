const Operation = require('../models/operation.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const createOperation = (req,res)=>{
    if(!req.body)
        return res.status(400).json({err:'operation required'});
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
        return res.status(400).json('operation id required');
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

const listOperationsByClientId= async (req,res)=>{
    if(!req.params.idClient)
        return res.status(400).json({err:'client id required'});

    const operations = await User.findById(req.params.idClient,{_id:0,PerformedOperations:1}).populate('PerformedOperations');

    return res.status(200).json(operations);
}

const getTotalOperationsPerDate = async (req,res)=>{
    if (!req.body)
        return res.status(400).json({err:'year required'});
//this comment is how to filter inside the database on the creation year only
/*    let start = new Date(req.body.year,0,1,1,0,0);
    let end =new Date(req.body.year,11,31,0,59,59);*/

    let start = new Date(req.body.start);
    let end = new Date(req.body.end);

    //console.log(end=new Date(end.getFullYear(),end.getMonth(),end.getDate(),0,59,59))

    end.setDate(end.getDate()+1);

    if(Date.parse(start)-Date.parse(end)>0)
        return res.status(405).json('the end date needs to be later than the start date!')

    const list = await Operation.find({createdAt:{$gte:start,$lte:end}});
    if(!list)
        return res.status(500).json('oops! something went wrong.');

    var totalOperationsThisYear =0;
    var sendMandat = 0;
    var receiveMandat = 0;
    var deposit = 0;
    var withdraw = 0;
    var payBills = 0;
    var edinarCard = 0;

    //MANDAT_SEND','MANDAT_RECEIVE','ACCOUNT_DEPOSIT','ACCOUNT_WITHDRAW','PAY_BILL','CREATE_EDINAR_CARD
    for (var i=0;i<list.length;i++)
    {
        totalOperationsThisYear++;

        switch (list[i].operationType)
        {
            case "MANDAT_SEND":
            {
                sendMandat=sendMandat +1;
                break;
            }

            case "MANDAT_RECEIVE":
            {
                receiveMandat=receiveMandat +1;
                break;
            }

            case "ACCOUNT_DEPOSIT":
            {
                deposit=deposit+1;
                break;
            }

            case "ACCOUNT_WITHDRAW":
            {
                withdraw=withdraw+1;
                break;
            }

            case "PAY_BILL":
            {
                payBills=payBills+1;
                break;
            }

            case "CREATE_EDINAR_CARD":
            {
                edinarCard=edinarCard+1;
                break;
            }

            default :

        }
    }

    return res.status(200).json({total:totalOperationsThisYear,MandatSent:sendMandat,MandatReceived:receiveMandat,deposited:deposit,withdrawn:withdraw,
    billsPayed:payBills,edinarCards:edinarCard});

}

const deleteOperation = async (req,res)=>{
    const result = await Operation.deleteOne({_id:req.params.id});
    if(result)
    {
        return res.status(200).json("the operation has been successfully deleted")
    }
    return res.status(500).json("oups, something went wrong!")
}



module.exports={createOperation,deleteOperation,getOperationById,listOperations,listOperationsByClientId,getTotalOperationsPerDate}