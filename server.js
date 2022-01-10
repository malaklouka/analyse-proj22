const express=require('express')
const connectDB=require('./config/dbConnect')
const app=express();
require('dotenv').config()
//connecting to the database
connectDB();
//my router
app.use(express.json())
app.use('/user',require('./routes/userRouter'))
app.use('/an',require('./routes/analyseRouter'))
app.use('/profil',require('./routes/profileRouter'))

const PORT=process.env.PORT
app.listen(PORT,(err)=>err?console.log(err):console.log(`server is running on ${PORT}`))   