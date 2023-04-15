const express = require("express")
const router = express.Router()

const Random = require("../../models/random-short")

//首頁
router.get("/",(req,res) => {
    return res.render("index")
 })

 //讓短網址導向原來頁面
router.get("/:random",(req,res)=>{
    let {random} = req.params
    return Random.findOne({random})
    .lean()
    .then(data=>{
        if (data !== null){
            return res.redirect(data.origin)
        }else{
            return res.render("noresult")  //查無資料的例外處理
        }
    })
    .catch(e => {
        return res.render("error")
    })
})

module.exports = router