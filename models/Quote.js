// Import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a new Schema (only mongoose knows about the schema. Mongo itself does not.)
const quoteSchema = new Schema({
    name: {
        type: String,
        
    },
    address: {
        type: String,
         
    },
    suburb: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    message: {
        type: String,
        
    },
    service:[String]
    ,
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