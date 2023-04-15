const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { engine }= require("express-handlebars")
const routes = require("./routes/")

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


app.engine("handlebars", engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.use(express.urlencoded({extended:true}))
app.use(routes);


app.listen(3000,() =>{
    console.log("listening")
})