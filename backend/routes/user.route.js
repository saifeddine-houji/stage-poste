const express = require ('express');
const router = express.Router();
const User = require("../models/user.model");
const {getUserById,registerUser,listUsers,deleteUser,confirm} = require("../controllers/user.controller")



router.get('/getUser/:idUser',getUserById);
router.post('/signIn',registerUser);
router.get('/confirm/:id',confirm)
router.get('/listUsers',listUsers);
router.delete('/deleteUser/:idUser',deleteUser);


module.exports = router;