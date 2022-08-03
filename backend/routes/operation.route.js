const express = require ('express');
const router = express.Router();
const Operation = require('../models/operation.model')
const {createOperation} = require('../controllers/operation.controller')


router.post('/createOperation',createOperation);

module.exports = router;