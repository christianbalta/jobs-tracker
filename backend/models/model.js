const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    jobTitle: {
        required: true,
        type: String
    },
    companyName: {
        required: true,
        type: String
    },
    active: {
        type: Boolean
    },
    pendingFeedback: {
        type: Boolean
    },
    interview: {
      type: Boolean
    },
})

module.exports = mongoose.model('Data', dataSchema)