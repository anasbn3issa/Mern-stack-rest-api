const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text : {
        type: String,
        required: [true,'Goal is required']
    },
} ,
 {
    timestamps : true, // to add createdAt and updatedAt fields
}
);

module.exports = mongoose.model('Goal',goalSchema);