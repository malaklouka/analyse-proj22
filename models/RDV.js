const mongoose=require('mongoose');
const schema=mongoose.Schema;
const rdvSchema=new schema({

date:{
    type:String,

},
patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    unique: true
},
labo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    unique: true
},

}, {
    timestamps: true,
  }
  
)

module.exports=mongoose.model('rdv',rdvSchema)