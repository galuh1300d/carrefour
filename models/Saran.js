const mongoose = require('mongoose')
const { Schema } = mongoose

const saranSchema = new Schema({
  namaLengkap: String,
  namaPanggilan: String,
  tanggalLahir: String,
  alamat: String,
  jenisKelamin: String,
  gerai: String,
  komentar: String
})

mongoose.model('saran', saranSchema)