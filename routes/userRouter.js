const express = require("express");
const userRouter = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const User = require("../models/User");
const { validation, registerRules, loginRules } = require("../middelware/validator");
const isAuth=require('../middelware/passport')

//test route
userRouter.get("/", (req, res) => {
  res.send("go on");
});
//register
userRouter.post("/register",registerRules(),validation, async (req, res) => {
  const { name, surname, email, password,sexe,age,budget,image,adresse,etat,tel } = req.body;
  try {
    const newUser = new user({ name, surname, email, password,sexe,age,budget,image,adresse,etat,tel });
    //verify existing mail
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      
      return res.status(200).send({ msg: "this email is already existed" });
    }
    //hashing pass
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;


    //saving info
    await newUser.save();
        //creation token 
        const newUserToken=await newUser.save()

const payload={
    _id: newUserToken._id,
    email: newUserToken.email
};
const token= await jwt.sign(payload,process.env.secretOrKey, { expiresIn:3600 })
console.log(token)
    res
      .status(200)
      .send({ newUserToken, msg: "Good! your info is saved successfully!",token: `Bearer ${token}` });
  } catch (error) {
    res.status(404).json({
      error: {
        message: error.message,
      },
    });
  }
});
/////////////////////// login
userRouter.post('/login',loginRules(),validation, async(req,res)=>{
    const {email,password}=req.body;
    try {
        //verify existed user
        const existedUser= await User.findOne({email});
        // if user not existed
        if (!existedUser){
            return res.status(400).send({msg:"bad credential!!"})
        }
        //comparing the pass
        const match= await bcrypt.compare(password,existedUser.password)
        if (!match){
            return res.status(400).send({msg:"pass!!"})
        }
        console.log(existedUser)
//creation token 
const payload={
    _id: existedUser._id
};
const token= await jwt.sign(payload,process.env.secretOrKey, { expiresIn:3600 })
console.log(token)
        res.status(200).send({user:existedUser,msg:"login succeed", token: `Bearer ${token}`})
    } catch (error) {
        res.status(500).send({msg:"cant sign in"})
        
    }
})
//current user
userRouter.get('/current',isAuth(),(req,res)=>{
    res.status(200).send({user:req.user}) 
})
module.exports = userRouter;
