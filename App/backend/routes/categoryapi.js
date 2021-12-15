const express = require('express');
const router = express.Router();
var jwt = require("jsonwebtoken");
const JWT_SECRET = "this is my app";
const Category = require("../models/category");
const { body, validationResult } = require("express-validator");
const { findOne, findByIdAndDelete } = require('../models/user');

//api call for creating a category 

router.post("/addcategory", async (req, res) => {
    let category = await Category.findOne({ name: req.body.name });
    if (category) {
        return res.status(400).json({ errors: "Sorry Category already Exists" });
    }
    try {
        category = await Category.create(
            {
                name: req.body.name,
                price: req.body.price,
                calories: req.body.calories,
            });
        const data = {
            category: {
                id: category.id,
            },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken);
        
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("Some Error occurred" + error);
    }
})

//api call for deleting a category

router.delete("/deletecategory", async (req, res) => {
    let category = await Category.findOne({ name: req.body.name });
    console.log(category);
    if (!category) {
        return res.status(500).send("Category Not found");
    }
    try {
        category = await Category.findByIdAndDelete(category._id);
        res.json({ "Success": "Note deleted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Some Error occurred" + error);
    }
})

//api call to get all categories from the db

router.get("/getallcategories", async (req, res) => {

    try {
        let allcategories = await Category.find();
        console.log(allcategories);

        return res.json(allcategories);
    }
    catch (error) {
        console.log(error);
        return res.json("Some error occured")
    }
})

//api call to get category by name from the db

router.get("/getcategorybyname", async(req, res)=>
{
    try{
    let category=await Category.findOne({name:req.body.name});
    if(!category)return res.json("Sorry data is not found");
    console.log(category);
     res.json(category);
    }
    catch(error){
       res.json("Some error occured unable to find the data");
    }
})

//api call for updating the category data

router.post("/updatecategory/:name", async(req, res)=>{
    try{
       let category=await Category.findOne({name:req.params.name});
       console.log(category);
       if(!category)return res.json("Sorry unable to update");
       category.name=req.body.name;
       category.price=req.body.price;
       category.calories=req.body.calories;
       category.save();
       return res.json("Updated successfully");
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send("Some Error occurred");
    }
})

module.exports = router;
