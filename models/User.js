const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
name:{
    type: String,
    required:true
},
surname:{
    type:String,

},
sexe:{
    type:String,
    Enum:["female","male"]
},
tel:{
    type:String
},
image:{
    type:String
},
etat:{ 
    type:String
},
adresse:{ 
    type:String
},
budget:{
    type:String
},
age:{
    type:Number
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
role:{
    type:String,
    Enum:["admin","labo","patient","helper"],
    default:"admin"
}
})

module.exports=mongoose.model('user',userSchema)