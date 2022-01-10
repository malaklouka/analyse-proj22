const mongoose=require('mongoose');
const schema=mongoose.Schema;
const analyseSchema=new schema({
category:{
    type: String,
},
price:{
    type:String,

},

labo:{
    type: String
},
nameAn:{
    type:String,
    required:true
}
})

module.exports=mongoose.model('analyse',analyseSchema)