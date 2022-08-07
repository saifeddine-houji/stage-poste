const express = require ('express');
const router = express.Router();
const passport = require('passport')
const Operation = require('../models/operation.model')
const {createOperation} = require('../controllers/operation.controller')
const{verifyToken,verifyUser,verifyAdmin}= require('../utils/verifyToken');


//router.post('/createOperation',passport.authenticate('jwt',{session:false}),createOperation);
router.post('/createOperation',verifyUser,createOperation);

module.exports = router;