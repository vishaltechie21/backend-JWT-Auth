const User = require("../models/userModel")
const bcrypt = require("bcrypt");

const register = async (req , res) => {
 try{
    const {username, password}  = req.body;
 const hashedPassword = await bcrypt.hash(password, 10);
 const newUser = new User({username, password: hashedPassword});
 await newUser.save();
 res.status(201).json({message: `User created successfully ${username}`});
 }catch(err){
    res.status(400).json({message: err.message});
 }
}

const login =async (req, res) => {
   try{
    const {username, password} = req.body;
    const ueser = await User.findOne({username})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid password"})
        }

        const token = jwt.sign({
            id: user._id, role: user.role 
         },
        process.env.SECRET_KEY, {expiresIn: "1h"});
        res.status(200).json({token})
   }catch{
    res.status(400).json({message: err.message})
   }
}

module.exports ={
    register,
    login
}