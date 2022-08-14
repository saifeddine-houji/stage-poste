const mongoose = require('mongoose');
const {Types, Schema} = require("mongoose");

const operationSchema = mongoose.Schema({
    operation:{
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