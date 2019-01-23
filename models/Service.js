// Import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Connect Mongoose to the MongoDB react-project-server database
// mongoose.connect('mongodb://localhost/recipes', err => {
//   if (err) {
//     console.log('Error connecting to database', err)
//   } else {
//     console.log('Connected to database!')
//   }
// })

// Create a new Schema (only mongoose knows about the schema. Mongo itself does not.)
const serviceSchema = new Schema({
    name: String,
    created_at: { type: Date, default: Date.now }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service