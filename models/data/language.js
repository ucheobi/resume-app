const mongoose = require('mongoose');

const languageSchema = mongoose.Schema(
    {
        language: {
            type: String,
        },
        level: {
            type: String
        },
      
    }
)

module.exports = mongoose.model("Language", languageSchema);