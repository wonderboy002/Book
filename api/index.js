const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { User } = require("./models/user.model.js");
require("dotenv").config();
const { connectDB } = require("./db/index.js");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSalt(10);

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

app.post("/api/login",async(req,res)=>{
  const {email,password}=req.body;
  res.json({email,password});
})
