// Import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a new Schema (only mongoose knows about the schema. Mongo itself does not.)
const serviceSchema = new Schema({
    name: {
        type: String, 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service