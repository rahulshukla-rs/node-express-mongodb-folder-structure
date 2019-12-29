const express = require("express");
const router = express.Router();

const testController = require("../controllers/Test");

/*
Name: testOne
Method: GET
Des: 
Route: Private
*/
router.get("/testOne", testController.testOne);

/*
Name: testTwo
Method: GET
Des: 
Route: Private
*/
router.get("/testTwo", testController.testTwo);

module.exports = router;