const express = require("express")
const router = express.Router()
const home = require("./modules/home")
const result = require("./modules/result")

router.use("/", home)
router.use("/random", result)
module.exports = router