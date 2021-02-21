const mongoose = require('mongoose');

const infoSchema = mongoose.Schema(
    {
        info: {
            type: String,
        },
      
    }
)

module.exports = mongoose.model("Info", infoSchema);