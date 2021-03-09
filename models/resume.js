const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
    {
        first: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        middle: {
            type: String,
            trim: true,
            required: false,
            maxlength: 32
        },
        last: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        phone: {
            type: Number,
            trim: true,
            required: false,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        age: { 
            type: String
        },
        nationality: {
            type: String,
            required: true,
            maxlength: 32
        },
        address: {
            type: String,
            required: false,
            maxlength: 100
        },
        objective: {
            type: String
        },
        summary: {
            type: String
        }
    },
    
);

module.exports = mongoose.model("Resume", resumeSchema);
