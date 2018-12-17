const mongoose = require('mongoose')

const HalamanSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  slug: {
    type: String
  },
  imageFile: {
    type: String
  },
  desc: {
    type: String
  }
})

const Halaman = module.exports = mongoose.model('Halaman', HalamanSchema)