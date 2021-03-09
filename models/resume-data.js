const mongoose = require('mongoose');
const education = require('./data/education');
const Work = require('./data/work');
const interest = require('./data/interest');
const skills = require('./data/skills');
const language = require('./data/language');
const info = require('./data/additional-info');
const references = require('./data/references');

//const workReference = work.schema.obj;

const dataSchema = new mongoose.Schema(
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
        // education: [{
        //     course: String,
        //     school: String,
        //     startDate: String,
        //     endDate: String
        // }] ,
         //work: [workReference],
        // language: [language],
        // info : [info],
        // interest: [interest],
        // skills: [skills],
        // references: [references],
       
    },
    
);

module.exports = mongoose.model("Data", dataSchema);
