const express = require("express")
const app = express()
const mongoose = require("mongoose")
const getRandom = require("./random")


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on("error",()=>{
    console.log("error")
})
db.once("open", () =>{
    console.log("success")
})

app.use(express.urlencoded({extended:true}))


app.get("/",(req,res) => {
   res.send(getRandom())
})

app.listen(3000,() =>{
    console.log("listening")
})