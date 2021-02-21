const mongoose = require('mongoose');

const workSchema = mongoose.Schema(
    {
        company: {
            type: String,
        },
        place: {
            type: String
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
    }
)

module.exports = mongoose.model("Work", workSchema);