const express = require("express")
const router = express.Router()
const getRandom = require("../../models/random")
const Random = require("../../models/random-short")




//送出資料並存到資料庫
router.post("/",(req,res) =>{
    let origin = req.body.url;
    let random = getRandom()
    return Random.findOne({ origin })
    .lean()
    .then(data => {
        if (data !== null){
            res.render("results",{ data })
        }else{
            Random.create({origin, random})
            .then(()=>{
                return Random.findOne({ origin })
                .lean()
                .then(data=>{
                    res.render("results",{ data })
                })
            })
        }
    })
})

module.exports = router