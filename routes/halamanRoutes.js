const Halaman = require('../models/Halaman')

module.exports = (app) => {

  app.get('/cms/:slug', (req, res) => {

    let slug = req.params.slug

    Halaman.findOne({slug}, (err, halaman) => {
      if (err) {
        return console.log(err)
      }

      if (!halaman) {
        res.redirect('/');
      } else {
        res.render('halaman', {
          id: halaman._id,
          title: halaman.title,
          image: halaman.imageFile,
          desc: halaman.desc
        })
      }
    
    })
  })

}