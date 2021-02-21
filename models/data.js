const mongoose = require('mongoose');
const education = require('./data/education');
const work = require('./data/work');
const interest = require('./data/interest');
const skills = require('./data/skills');
const language = require('./data/language');
const info = require('./data/info');
const references = require('./data/references');

const dataSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        middle_name: {
            type: String,
            trim: true,
            required: false,
            maxlength: 32
        },
        last_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        phone_number: {
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
            type: Number, 
            min: 16, 
            max: 65 
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
        education: [education],
        work: [work],
        language: [language],
        info : [info],
        interest: [interest],
        skills: [skills],
        references: [references],
        objective: {
            type: String
        },
        summary: {
            type: String
        }
    },
    
);

module.exports = mongoose.model("Data", dataSchema);
