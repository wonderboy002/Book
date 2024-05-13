const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { User } = require("./models/user.model.js");
require("dotenv").config();
const { connectDB } = require("./db/index.js");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="asncnddkjsjkjkdjksjkdjks";
const bcryptSalt = bcrypt.genSalt(10);
const cookieParser=require("cookie-parser");
app.use(express.json());
app.use(cookieParser());


connectDB();

app.listen(3000, () => {
  console.log("Server functional at port 3000");
});

app.get("/api/test", (req, res) => {
  res.send("Hello World");
});

app.post("/api/register", async (req, res) => {
  // res.json("You are trying to register a new user")
  //grab data from the frontend
  const { fullName, email, password } = req.body;
  let newUser;
 try {
     newUser = await User.create({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
 }
 catch (err){
    console.log("Error while registering the user in register route");
 }
  res.json({newUser})
});

app.post("/api/login",async (req,res)=>{
  const {email,password}=req.body;
  const flag=await User.findOne({email})
  if (flag){
     //check for passwords
     const checkPassword=bcrypt.compareSync(password,flag.password);
     if (checkPassword){
      jwt.sign({email : flag.email,id : flag._id,fullName : flag.fullName},jwtSecret,{},(err,createdToken)=>{
          if (err){
            throw err;
          }
          res.cookie('token',createdToken).json(flag);
      })
      //log in user
     }
     else {
      res.json("password not ok");
     }
  }
  else {
    res.json("flag not found");
  }
  
});

app.get("/api/profile",(req,res)=>{
  //grabbed token from frontend request
  const {token}=req.cookies
  if (!token){
    res.json(null)
  }
  else {
    //decrypt the token
    jwt.verify(token,jwtSecret,{},(err,result)=>{
        if (err){
          throw err;
        }
        else {
          res.json({result})
        }
    })
  }

 
})

app.get('/api/logout',(req,res)=>[
  res.cookie('token','').json("successfull logout")
])
