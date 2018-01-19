import express from 'express'

import {
  getAlbums,
  getAlbumById,
  getLikes,
  addLike,
  removeLike
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  if (!req.session.userID) {
    res.redirect('/sign-in')
  } else {
    getAlbums()
      .then(albums => res.render('albums/index', {
        albums,
        userID: req.session.userID,
      })
      )
      .catch(next)
  }
})

router.get('/:albumID', (req, res, next) => {
  // getAlbumById(req.params.albumID)
  //   .then(album => res.render('albums/album', {album}))
  //   .catch(next)
  getAlbumById(req.params.albumID)
    .then(album => {
      getLikes(req.params.albumID)
        .then(likes => {
          res.render('albums/album', {
            album,
            likes: likes[0].count,
            userID: req.session.userID
          })
        })
    })
})



router.post('/like/:albumID', (req, res, next) => {
  const {userID} = req.session
  const {albumID} = req.params

  return addLike(userID, albumID)
    .then(like => {
      res.json(like)
    })
})



router.delete('/like/:albumID', (req, res, next) => {
  const {userID} = req.session
  const {albumID} = req.params

  return removeLike(userID, albumID)
    .then(like => {
      res.json(like)
    })
})

export default router
