const express = require ('express');
const router = express.Router();
const User = require("../models/user.model");
const upload = require('../utils/uploadFileMulter')
const {getUserById,registerUser,listUsers,deleteUser,confirmAccount,login,updateUser} = require("../controllers/user.controller")
const{verifyToken,verifyUser,verifyAdmin}= require('../utils/verifyToken');


router.get('/getUser/:idUser',verifyAdmin,getUserById);
router.post('/signIn',upload.any("imgProfile"),registerUser);
router.post('/login',login);
router.put('/updateUser/:id',verifyUser,updateUser);
router.get('/confirmAccount/:id',confirmAccount)
router.get('/listUsers',verifyAdmin,listUsers);
router.delete('/deleteUser/:id',verifyUser,deleteUser);


/*router.get('/verifyToken',verifyToken,(req,res,next)=>{
    res.send("access confirmed")
})

router.get('/verifyUser/:id',verifyUser,(req,res,next)=>{
    res.send("action approved")
})

router.get('/verifyAdmin',verifyAdmin,(req,res,next)=>{
    res.send("you are an admin")
})*/


module.exports = router;