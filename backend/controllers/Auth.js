const User = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mailer = require('../utils/mailer');
const validationRegister = require('../utils/validateRegister');
const validationLogin = require('../utils/validateLogin');

const registerUser = async(req,res)=>{

    //check if all info is provided
    const { errors, isValid } = validationRegister(req.body)

    if (!isValid) {
        console.log(errors);
        return res.status(400).json(errors)
    }

    //check if user exists
    User.findOne({email:req.body.email})
        .then(user=>{
            if(user)
            {
                return res.status(400).json('Email already in use!');
            }

            else
            {
                const newUser = new User({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    userName:req.body.userName,
                    email:req.body.email,
                    password:req.body.password,
                    birthDate:req.body.birthDate,
                    state:req.body.state,
                    img:'/uploadedImages/'+req.files[0].filename,
                    phone:req.body.phone,
                    gender:req.body.gender,

                });
                //encryption of password

                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err)
                        {throw err;}

                        newUser.password = hash;
                        User.create(newUser)
                            .then(async u =>{
                                mailer(u)
                                res.status(200).json("account registered successfully! Please check your email for the verification message before logging in!")
                            })
                    })
                })
            }
        })

}


const login = async(req,res)=>{

    const {email,password}= req.body;

    const {errors,isValid}=validationLogin(req.body);

    if(!isValid){
        return res.status(400).json({error:errors});
    }

    else{
        const userFound = await User.findOne({email:email});

        if (!userFound){
            return res.status(400).json({error:"There is no user with this email!"})
        }

        if (userFound.activeUser ==0)
        {
            return res.status(400).json("This account has been suspended for inactivity")
        }

        if (userFound.confirm == 0)
        {
            return res.status(400).json("You have to confirm your account before logging in. Please check your email.")
        }

        let isMatch = await bcrypt.compare(req.body.password,userFound.password)

        if(!isMatch)
        {
            return res.status(401).json({error:"Incorrect password"})
        }

        const token =jwt.sign({
            id:userFound._id, role:userFound.role
        },
            process.env.JWT);
        const {password,role, ...otherDetails} = userFound._doc;
       return res.cookie("access_token",token,{httpOnly:true}).status(200).json({details:{...otherDetails},role});
    }
}


//const verify


const confirmAccount =(req,res)=>{
    User.updateOne({_id:String(req.params.id)},{$set:{confirm:1}})
        .then(result=>res.status(200).json({msg:'account has been confirmed!'}))
        .catch(err=>res.status(500).json({msg:'something went wrong!'}))
}

module.exports={registerUser,confirmAccount,login}