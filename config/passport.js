const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = (passport) => {
  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
      if (err) console.log(err)

      if (!user) {
        return done(null, false, {message: 'No user found!'})
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) console.log(err)

        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, {message: 'Wrong password!'})
        }
      })
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}