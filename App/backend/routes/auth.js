const express = require('express');
const router = express.Router();
var jwt = require("jsonwebtoken");
const JWT_SECRET = "this is my app";
const User = require("../models/user");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const sendgrid = require('@sendgrid/mail');
const apikey = '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';
sendgrid.setApiKey(apikey);
const emailTemplates = require("../emailtemplate");
const { body, validationResult } = require("express-validator");
const { findOne, findByIdAndDelete } = require('../models/user');

// user Signup api call route 1 using post : /api/auth/createuser 
router.post('/createuser', [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength(5),
    body("phonenumber", "Enter your Phone Number").isLength(10),
], async(req, res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){return res.status(400).json({errors:errors.array()});
}
try{
let user=await User.findOne({email:req.body.email});
if(user){
    return res.status(400).json({errors:"Sorry Email Already Exists!"});

}
else
{
    const salt=await bcrypt.genSalt(10);
    const passkeyvalue=shortid.generate();
    const secpass=await bcrypt.hash(req.body.password, salt);
    user = await User.create(
        {
            name:req.body.name,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            password:secpass,
            passkey:passkeyvalue,
            isadmin:false,
            isEmailVerified:false,
        });
        const message = {
            to: user.email,
            from: "Vorugantipranay@gmail.com",
            subject: "Email Verification Key",
            text: "Authenticate Yourselves",
            html: emailTemplates.Verify({username:user.name, passkey:passkeyvalue}),
        }
        sendgrid
            .send(message).
            then((res) => console.log("Email is sent" + res))
            .catch((error) => console.log("Erorr message from sendgrid is" + error));
            const data = {
                user: {
                  id: user.id,
                },
              };
              const authToken = jwt.sign(data, JWT_SECRET);
              res.json({ authToken });
            }
}
catch(error){
    console.log(error.message);
    res.status(500).send("Some Error occurred"+ error);
}
})


//Email verification api call route 2 /api/auth/verifyEmail 

router.post('/verifyEmail', async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    console.log(user);
    if(!user)
    {
        return res.status(400).json({errors:"sorry you are not registered"})
      
    }
    else if(user.isEmailVerified)
    {
        return res.status(400).json({errors:"You are already Verified"});
    }
    try{
    if(req.body.passkey===user.passkey)
   {
    user.passkey ="";
    user.isEmailVerified = true;
    await user.save();
    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
            }
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Some Error occurred"+ error);
        }
})

//login api call route 3 /api/auth/login 


router.post('/login', async(req, res)=>{
    let user = await User.findOne({email:req.body.email});
    if(!user)return res.status(400).json({errors:"sorry you are not registered"});
    else if (user.isEmailVerified!=true)return res.status(400).json({errors:"sorry you are not verified "});
    else 
    {
        try
        {
          const{email,password}=req.body;
          const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success = false;  
            return res.status(400).json({success, error: "Wrong Credentials"});
          }
          const data = {
              user:{
                  id:user.id
              }
          }
          const authToken = jwt.sign(data, JWT_SECRET);
          console.log("Logged in");
          success = true;
          res.json({ success, authToken });
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Some Error occurred"+ error);
        }
    }
})

// deletion api call route4 /api/auth/deactiveuser
router.post('/deactivateuser', async(req, res)=>
{
    let user = await User.findOne({email:req.body.email});
    if(!user)
    {
    return res.status(400).json({error: "Sorry Some errror occured"});
    }

   
    try{
        
        user.isActive=false;
        await user.save();
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
            }
            catch(error)
            {
                res.status(500).send("Some Error occurred"+ error);
            }
})

//route to get email for forgot password /api/passkeyforupdation

router.post("/passkeyforupdation", async(req,res)=>
{
    let user =await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).json({error: "Sorry you are not registered"});
    }
    try
    {
    let passkeyvalue=shortid.generate();
    user.passkey=passkeyvalue;
    const message = {
        to: user.email,
        from: "Vorugantipranay@gmail.com",
        subject: "PASSWORD UPDATION",
        text: "Authenticate Yourselves",
        html: emailTemplates.Verify({username:user.name, passkey:passkeyvalue}),
    }
    sendgrid
        .send(message).
        then((res) => console.log("Email is sent to : "+ user.email))
        .catch((error) => console.log("Erorr message from sendgrid is" + error));
      await user.save();
      const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
}
catch(error)
            {
                res.status(500).send("Some Error occurred"+ error);
            }
}
)


//api call for password updation /api/updatepassword

router.post("/updatepassword", async(req, res)=>
{
    let user = await User.findOne({paskey:req.body.passkey});
    if(!user)return res.status(400).json({error: "Sorry paskey is not correct"});
    try{
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(req.body.password, salt);
        user.password=secpass;
        await user.save();
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch(error)
            {
                res.status(500).send("Some Error occurred"+ error);
            }
});
module.exports = router ;
