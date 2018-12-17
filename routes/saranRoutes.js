const mongoose = require('mongoose')
const Saran = mongoose.model('saran')

module.exports = (app) => {

  app.post('/api/saran', async (req, res) => {
    const newSaran = new Saran({
      namaLengkap: req.body.namaLengkap,
      namaPanggilan: req.body.namaPanggilan,
      tanggalLahir: req.body.tanggalLahir,
      alamat: req.body.alamat,
      jenisKelamin: req.body.jenisKelamin,
      gerai: req.body.gerai,
      komentar: req.body.komentar
    })
  
    try {
      const saran = await newSaran.save()
      res.json(saran)
    } catch(err) {
      res.status(422)
    }
    
  })
}