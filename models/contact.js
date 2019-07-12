const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema)