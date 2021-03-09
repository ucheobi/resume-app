const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
    {
        course: String,
        school: String,
        startDate: String,
        endDate: String
    }
)

module.exports = mongoose.model("Education", educationSchema);