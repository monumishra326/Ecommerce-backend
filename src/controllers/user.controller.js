const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

//-----Sign Up--------

router.post("", async (req, res) => {
  try {
    let newUser = await User.create(req.body);
  
    return res.status(201).send({ newUser });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

//-------Log In-------

router.post("/:email", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.params.email });

    // if manager does not exist, then throw an error

    if (!user) {
      return res.status(400).json({
        status: "Failed",
        message: "Please provide correct email address or password.",
      });
    }

    // else we match the password

    const match = await user.checkPassword(req.body.password);

    // if it does not match then throw an error\

    if (!match) {
      return res.status(400).json({
        status: "Failed",
        message: "Please provide correct email address or password.",
      });
    }

    let token = 12 + user.name + "axis";

    return res.status(200).send({ user, token });
  } catch (e) {
    res.status(500).json({ status: "Failed", message: e.message });
  }
});

module.exports = router;
