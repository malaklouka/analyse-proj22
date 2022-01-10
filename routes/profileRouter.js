const express=require('express')
const profileRouter=express.Router()
const User=require('../models/User')


profileRouter.get('/profile',
isAuth(),
async(req,res)=>{
    try {
        const response = await User.findOne()
        res.send(response)
    } catch (error) {
        res.status(400).send({msg:'No user get it'})
    }
})

profileRouter.put('/editprofil/:id',isAuth(),async(req,res)=>{
    try {
        const updatedprofil= await User.updateOne({_id:req.params.id},{$set:{...req.body}})
        console.log(updatedprofil)
        if (updatedprofil.modifiedCount){
            res.status(200).send({updatedprofil,msg:"profil is updated with success"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({error,msg:'profil is not edited'})
        
    }
})

profileRouter.get('/profil/:id',isAuth(),async(req,res)=>{
try {
    const {id}=req.params
    const userp= await User.findById(id)
    res.status(200).send({userp,msg:"profillll"})
} catch (error) {
    console.log(error)
    res.status(401).send({error,msg:'error while getting this profil'})
}
})
module.exports=profileRouter