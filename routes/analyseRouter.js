const express=require('express')
const analyseRouter=express.Router()
const Analyse =require('../models/analyse')


//get analyse by labo
analyseRouter.get('/analys',async(req,res)=>{
try {
    const analyses=await Analyse.find();
    res.send({analyses, msg:"all analyses"})
} catch (error) {
    res.status(500).send(error)
}
})
//post analyse by labo
analyseRouter.post('/postAn',isAuth(),async(req,res)=>{
    const user=req.user;
    const analyse=req.body;
    const {nameAn,category,price,labo}=req.body;
    const newAnalyse= new Analyse({nameAn,category,price,labo:req.user.name})
    try {
        await newAnalyse.save();
        res.status(201).send({analyse:newAnalyse,msg:"the analyse is added successfully"})
    } catch (error) {
     res.status(400).send({error,msg:"sorry somthing is wrong"})   
    }
})
// get analyse by category ---- SEARCH BY CATEG
analyseRouter.get('/getAn/:category',async(req,res)=>{
    try {
        const category=req.params.category;
        console.log(category)
        const analysCateg=await Analyse.find({category})
        res.send({analysCateg,msg:"analyse is here"})
    } catch (error) {
        console.log(error)
        res.status(401).send({error,msg:"error is happened"})
    }
})
//update analyse by labo
analyseRouter.put('/updateAn/:id',async(req,res)=>{
    try {
        const updatedAn= await Analyse.updateOne({
            _id:req.params.id},
            {$set:{...req.body}
        })
        console.log(updatedAn)
        if(updatedAn.modifiedCount){
            return res.send({updatedAn,msg:"the analyse is updated"})
        }
        res.status(400).send({msg:"no modifiction "})
    } catch (error) {
        res.status(400).send({error,msg:"error while updating "})
    }
})
//delete analyse by labo
analyseRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const result=await Analyse.findByIdAndDelete(id)
       result.deletedCount? res.send({msg:'analyse is deleted'}):res.send({msg:"already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send({error,msg:'sorry analyse is not deleted'})
    }
})


module.exports=analyseRouter;