const express = require("express")

const router = express.Router();

// Only admin can access this route
router.get("/admin", (req , res)=>{
    res.send("Welcome Admin");
})

// Both admin and user can access this route
router.get("/manager", (req, res)=>{
    res.send("Welcome Manager");
})

// All can access this route
router.get("/user",(req,res)=>{
    res.json({message: "welcome User"})
})

module.exports = router;