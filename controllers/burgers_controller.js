var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req,res){})
router.post("/api/burgers", function (req,res){})
router.put("/api/burgers", function (req,res){})

module.exports = router