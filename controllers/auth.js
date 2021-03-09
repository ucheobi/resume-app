const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.register = async (req, res) => {
    try{
        const user = await new User(req.body);

        await user.save((error, user) => {
            if(error){
                return res.status(400).json({
                    err: 'Fields cannot be empty'
                });
            }
            user.salt = undefined;
            user.hashed_password = undefined;
            
            res.status(200).json({
                user
            })
        })

        } catch(err){
        console.log(err.message);
    }
} 

exports.signin = (req, res) => {

    //find user by email
    const { email, password} = req.body;

    User.findOne({ email }, (err, user) => {

        if(err || !user){
            return res.status(400).json({
                error: "User email does not exist"
            });
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email or password not correct"
            })
        }

        //Generate a signed token for user
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        //persist the token in cookie
        res.cookie('t', token, { expire: new Date() + 9999})

        //return response with user token to the client
        const {_id, name, email } = user;

        return res.json({
            token,
            user: {
                _id,
                email,
                name
            }
        })
    })
}

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})

exports.signout = (req, res) => {
    res.clearCookie("t");
    res.json({ message: "Successfully signed out"})
};

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;

    if(!user){
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

