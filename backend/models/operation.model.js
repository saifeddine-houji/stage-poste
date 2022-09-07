const mongoose = require('mongoose');
const {Types, Schema} = require("mongoose");

const operationSchema = mongoose.Schema({

    operationType:{
        type:String,
        enum:['MANDAT_SEND','MANDAT_RECEIVE','ACCOUNT_DEPOSIT','ACCOUNT_WITHDRAW','CREATE_EDINAR_CARD']
    },

    operationInfo:{
        type:String
    },

    MadeByUser:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

},
    {timestamps:true})

module.exports = Operation = mongoose.model('Operation',operationSchema);