const mongoose = require('mongoose');

const interestSchema = mongoose.Schema(
    {
        skills: {
            type: String,
        },
      
    }
)

module.exports = mongoose.model("Interest", interestSchema);