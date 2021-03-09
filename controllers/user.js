const User = require("../models/user");

exports.userId = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if( err || !user){
            return res.status(400).json({
                error: "Sorry user not found. Please create an account if you don't have one"
            })
        }
        req.profile = user;
        next();
    })
}


