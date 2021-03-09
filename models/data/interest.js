const mongoose = require('mongoose');

const interestSchema = mongoose.Schema(
    {
        interest: {
            type: String,
        },
      
    }
)

module.exports = mongoose.model("Interest", interestSchema);