const express = require("express");

var router = express.Router();


router.get("/", (req, res)=>{
    res.send("Welcome To Seven E-health")
});


module.exports = router;