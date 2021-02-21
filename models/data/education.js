const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
    {
        course: {
            type: String,
        },
        school: {
            type: String,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
    }
)

module.exports = mongoose.model("Education", educationSchema);