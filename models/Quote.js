// Import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a new Schema (only mongoose knows about the schema. Mongo itself does not.)
const quoteSchema = new Schema({
    name: String,
    address: String,
    suburb: String,
    email: String,
    phone: String,
    //services 
    //property type
    //timeslot
    created_at: { type: Date, default: Date.now }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote