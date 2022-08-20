const express = require ('express');
const router = express.Router();
const passport = require('passport')
const Operation = require('../models/operation.model')
const {createOperation,deleteOperation,getOperationById,listOperations,listOperationsByClientId,getTotalOperationsPerDate} = require('../controllers/operation.controller')
const{verifyToken,verifyUser,verifyAdmin}= require('../utils/verifyToken');


router.post('/createOperation',verifyUser,createOperation);
router.delete('/deleteOperation/:id',verifyAdmin,deleteOperation);
router.get('/getOperationById/:idOperation',verifyUser,getOperationById);
router.get('/listOperations',verifyAdmin,listOperations);
router.get('/listOperationsByClientId/:idClient',verifyAdmin,listOperationsByClientId);
router.post('/getTotalOperationsPerDate',verifyAdmin,getTotalOperationsPerDate);

module.exports = router;