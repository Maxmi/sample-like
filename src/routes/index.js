import express from 'express'

import albums from './albums'
import authentication from './authentication'
import users from './users'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)
routes.use('/', authentication)
routes.use('/users', users)

export default routes
