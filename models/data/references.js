const mongoose = require('mongoose');

const referenceSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        company: {
            type: String,
        },
        position: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            Number
        }
    }
)

module.exports = mongoose.model("References", referenceSchema);