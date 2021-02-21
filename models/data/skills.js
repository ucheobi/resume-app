const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema(
    {
        skills: {
            type: String,
        },
        level: {
            type: String
        },
      
    }
)

module.exports = mongoose.model("Skills", skillsSchema);