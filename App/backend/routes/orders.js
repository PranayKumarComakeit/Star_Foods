const express = require("express");
const router = express.Router();
const Orders = require("../models/Order");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route 1 get all orders using get "/api/orders/fetchallorders". login required

router.get("/fetchallorders", fetchuser, async (req, res) => {
  try {
    const orders = await Orders.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error occurred");
  }
});

//Route 2 request new order using post "/api/orders/addorder" login req

router.post(
    "/addorder",
    fetchuser,
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try {
            const order = new Orders({
              user: req.user.id,
            });
            const savedOrder = await order.save();
            res.json(savedNote);
        } catch(error){
            console.log(error.message);
            res.status(500).send("Some Error occurred");
        }
    }

)

module.exports = router;