import express from 'express'
import {
  echo,
  getUsersAll
} from '../../api/v1'

const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Time: ', new Date().toJSON())
  console.log('Requested API:', req.originalUrl)
  next()
})

router.get('/echo/:message', echo)
router.get('/users', getUsersAll)

export default router
