const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = async (req, res) => {
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

