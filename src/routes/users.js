import express from 'express'

import {
  getUserById,
  updateProfile
} from '../actions'

const router = express.Router()

router.get('/:userID', (req, res, next) => {
  res.render('users/profile', {
    userID: req.params.userID
  })
})


router.get('/:userID/edit', (req, res, next) => {
  getUserById(req.params.userID)
    .then(user => res.render('users/editProfile', {
      name: user.name,
      email: user.email,
      id: user.id
    }))
    .catch(next)
})

router.put('/:userID/edit', (req, res, next) => {
  const {userID} = req.params
  const {name, email} = req.body
  updateProfile(userID, name, email)
    .then(user => {
      res.json(user)
    })
})


export default router
