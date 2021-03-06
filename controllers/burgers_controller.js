var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
})
router.post("/api/burgers", function (req, res) {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        })
})
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.update({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router