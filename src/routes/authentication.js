import express from 'express'

import {
  signUp,
  signIn,
} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {
    error: ''
  })
})

router.post('/sign-up', (req, res, next) => {
  const {name, email, password} = req.body

  if (name && email && password) {
    signUp(name, email, password)
      .then((user) => {
        req.session.userID = user.id,
        res.redirect('/')
      })
      .catch(next)
  } else {
    res.render('authentication/sign-up', {
      error: 'All fields required',
    })
  }
})


router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {
    error: ''
  })
})


router.post('/sign-in', (req, res, next) => {
  const {email, password} = req.body
  if (email && password) {
    signIn(email, password)
      .then(data => {
        if (data.email === email && data.password === password) {
          req.session.userID = data.id,
          res.redirect('/')
        } else {
          res.render('authentication/sign-in', {
            error: 'Wrong email or password'
          })
        }
      })
      .catch(next => {
        res.render('authentication/sign-in', {
          error: 'Something went wrong'
        })
      })
  } else {
    res.render('authentication/sign-in', {
      error: 'Both fields required'
    })
  }

})


export default router
