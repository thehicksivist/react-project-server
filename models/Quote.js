// Import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a new Schema (only mongoose knows about the schema. Mongo itself does not.)
const quoteSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    address: {
        type: String,
        required: true 
    },
    suburb: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    service: {
       type: Schema.ObjectId, ref: 'Service'
    },
    propertyType: {
        type: String
    },
    timeOfInspection: {
        type: String
    },
    dateOfInspection: {
        type: String
    },
    created_at: {
         type: Date, 
         default: Date.now 
    }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote