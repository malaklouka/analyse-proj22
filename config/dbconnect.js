const mongoose=require('mongoose');
const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{  useNewUrlParser: true, 
            useUnifiedTopology: true,
            family: 4,});
        console.log("db is connected!")
    } catch (error) {
        console.log(error,"sorry! db is not connected")
    }
}
module.exports=connectDB