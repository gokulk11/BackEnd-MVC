const User = require("../models/users.model.js");

const test = (req, res) =>{
    res.json({
        message: 'Api Is Working!',
    })
};




module.exports = {
    test,
    signup,
}