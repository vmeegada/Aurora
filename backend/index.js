const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const router = require('./routes')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const mongoose=require('mongoose')
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)// user:data password:HLaqttwzVeX2FY4a
.then(()=>{ console.log("  db is conneted")})
.catch((err)=>console.error(err))

    
app.listen(9000,()=>{ console.log("Server is running ")})
