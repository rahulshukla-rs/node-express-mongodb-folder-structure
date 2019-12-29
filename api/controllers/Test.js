const Test = require("../models/Test");

exports.testOne = (req, res) => {
    res.status(200).json({
        status: true,
        message: "Test One Route"
    })
}

exports.testTwo = async (req, res) => {
    try {
        const data = await Test.find({})
        res.status(200).json({
            status: true,
            message: "Test Two Route",
            data: data
        })
    }
    catch (err) {
        return next(err)
    }
}