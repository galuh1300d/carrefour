const passport = require('passport')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = (app) => {

  // app.post('/adminTC_1919/register', (req, res) => {

  //   name = req.body.name
  //   email = req.body.email
  //   username = req.body.username
  //   password = req.body.password
  //   password2 = req.body.password2

  //   req.checkBody('name', 'Name is required!').notEmpty()
  //   req.checkBody('email', 'Email is required!').isEmail()
  //   req.checkBody('username', 'Username is required!').notEmpty()
  //   req.checkBody('password', 'Password is required!').notEmpty()
  //   req.checkBody('password2', 'Password do not match!').equals(password)

  //   let errors = req.validationErrors()

  //   if (errors) {
  //     res.send(errors)
  //   } else {
  //     User.findOne({username}, (err, user) => {
  //       if (err) console.log(err)

  //       if (user) {
  //         res.send('Username exists, choose another!')
  //       } else {
  //         let user = new User({
  //           name,
  //           email,
  //           username,
  //           password,
  //           admin: 1
  //         })

  //         bcrypt.genSalt(10, (err, salt) => {
  //           bcrypt.hash(user.password, salt, (err, hash) => {
  //             if (err) console.log(err)

  //             user.password = hash

  //             user.save((err) => {
  //               if (err) {
  //                 console.log(err)
  //               } else {
  //                 res.send('You are now registered!')
  //               }
  //             })
  //           })
  //         })
  //       }
  //     })
  //   }

  // })

  app.get('/adminTC_1919/login', (req, res) => {

    if (res.locals.user) res.redirect('/')

    res.render('admin/login', {
      title: 'Log In'
    })

  })

  app.post('/adminTC_1919/users/login', (req, res, next) => {

    passport.authenticate('local', {
      successRedirect: '/adminTC_1919',
      failureRedirect: '/adminTC_1919/login',
      failureFlash: true
    })(req, res, next)

  })

  app.get('/adminTC_1919/users/logout', (req, res) => {

    req.logout()

    req.flash('success', 'You are logged out!')
    res.redirect('/adminTC_1919/login')

  })

}