const express = require("express")
const app = express()
const mongoose = require("mongoose")
const getRandom = require("./random")
const engine = require("express-handlebars")
const Random = require("./models/random-short")

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

//首頁
app.get("/",(req,res) => {
   res.render("index")
})

//送出資料並存到資料庫
app.post("/random",(req,res) =>{
    let origin = req.body.url;
    let random = getRandom();
    return Random.create({origin, random})
    .then(() => {
        res.render("results", {origin,random})
    })
    .catch(e =>{
        console.log(e)
    })
})

//讓短網址導向原來頁面
app.get("/random/:random",(req,res)=>{
    let {random} = req.params
    return Random.findOne({random})
    .lean()
    .then(data=>{
        res.redirect(data.origin)
    })
    .catch(e => {
        console.log(e)
    })
})
app.listen(3000,() =>{
    console.log("listening")
})