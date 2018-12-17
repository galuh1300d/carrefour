const mkdirp = require('mkdirp')
const fs = require('fs-extra')
const {isAdmin} = require('../config/auth')
const Halaman = require('../models/Halaman')

module.exports = (app) => {
  app.get('/adminTC_1919', isAdmin, (req, res) => {
    Halaman.find({}).exec((err, halaman) => {
      res.render('admin/halaman', {
        halaman,
        title: halaman.title
      })
    })
  })

  app.get('/adminTC_1919/tambah-halaman', isAdmin, (req, res) => {
    let title = ""
    let slug = ""
    let desc = ""
  
    res.render('admin/tambah_halaman', {
      title,
      slug,
      desc
    })
  })

  app.post('/adminTC_1919/tambah-halaman', (req, res) => {

    const imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : ""

    req.checkBody('title', 'Title must have a value').notEmpty()
    req.checkBody('image', 'You must upload an image').isImage(imageFile)
  
    let title = req.body.title
    let slug = req.body.slug.replace(/\s+/g, '-').toLowerCase()
    if (slug == "") slug = title.replace(/\s+/g, '-').toLowerCase()
    let desc = req.body.desc
  
    let errors = req.validationErrors()
  
    if (errors) {
      res.render('admin/tambah_halaman', {
        errors,
        title,
        slug,
        desc
      })
    } else {
      Halaman.findOne({slug}, (err, halaman) => {
        if (halaman) {
          req.flash('danger', 'Page slug exists, choose another')
          res.render('admin/tambah_halaman', {
            title,
            slug,
            desc
          })
        } else {
          let halaman = new Halaman({
            title,
            slug,
            imageFile,
            desc
          })
  
          halaman.save((err) => {
            if (err) {
              return console.log(err)
            }
            mkdirp('public/gambar/' + halaman._id, (err) => {
              if (err) {
                return console.log(err)
              } else {
                if (imageFile != "") {
                  let gambar = req.files.image
                  let path = 'public/gambar/' + halaman._id + '/' + imageFile
    
                  gambar.mv(path, (err) => {
                    if (err) {
                      return console.log(err)
                    }
                  });
                }
              }
            })
            
            req.flash('success', 'Page added!')
            res.redirect('/adminTC_1919')
          })
        }
      })
    }  
  })

  app.get('/adminTC_1919/edit-halaman/:id', isAdmin, (req, res) => {
    let errors;

    if (req.session.errors)
        errors = req.session.errors
    req.session.errors = null
  
    Halaman.findById(req.params.id, (err, halaman) => {
      if (err) {
        return console.log(err)
      }
      res.render('admin/edit_halaman', {
        title: halaman.title,
        slug: halaman.slug,
        desc: halaman.desc,
        id: halaman._id,
        image: halaman.imageFile
      })
    })
  })

  app.post('/adminTC_1919/edit-halaman/:id', (req, res) => {

    const imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : ""

    req.checkBody('title', 'Title must have a value.').notEmpty()
    req.checkBody('image', 'You must upload an image').isImage(imageFile)

    let title = req.body.title;
    let slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if (slug == "")
        slug = title.replace(/\s+/g, '-').toLowerCase();
    let desc = req.body.desc;
    let id = req.params.id;
    let pimage = req.body.pimage;

    let errors = req.validationErrors();

    if (errors) {
      req.session.errors = errors;
      res.redirect('/adminTC_1919/edit-halaman/' + id);
    } else {
        Halaman.findOne({slug: slug, _id: {'$ne': id}}, (err, halaman) => {
          if (err)
          console.log(err);

            if (halaman) {
              req.flash('danger', 'Page title exists, choose another.');
              res.redirect('/adminTC_1919/edit-halaman/' + id);
            } else {

                Halaman.findById(id, (err, halaman) => {
                    if (err)
                        return console.log(err);

                    halaman.title = title;
                    halaman.slug = slug;
                    halaman.desc = desc;
                    if (imageFile != "") {
                      halaman.imageFile = imageFile;
                    }

                    halaman.save((err) => {
                      if (err)
                          return console.log(err);

                        if (imageFile != "") {
                          if (pimage != "") {
                              fs.remove('public/gambar/' + id + '/' + pimage, (err) => {
                                  if (err)
                                      console.log(err);
                              });
                          }

                          var gambar = req.files.image;
                          var path = 'public/gambar/' + id + '/' + imageFile;

                          gambar.mv(path, (err) => {
                              return console.log(err);
                          });

                        }

                        req.flash('success', 'Page edited!');
                        res.redirect('/adminTC_1919/edit-halaman/' + id);
                    });

                });


            }
        });
    }

  })

  app.get('/adminTC_1919/hapus-halaman/:id', isAdmin, (req, res) => {

    const id = req.params.id
    const path = 'public/gambar/' +id

    fs.remove(path, (err) => {
      if (err) {
        return console.log(err)
      } else {
        Halaman.findByIdAndRemove(id, (err) => {
          if (err) {
            return console.log(err)
          }
          req.flash('success', 'Page deleted!')
          res.redirect('/adminTC_1919')
        })
      }
    })
  })

}