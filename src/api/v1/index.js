import { sampleEcho } from '../../utils'
import {User} from '../../models'

function echo (req, res) {
  const {message} = req.params

  res.send(sampleEcho(message))
}

function getUsersAll (req, res) {
  return User.findAll({})
    .then(result => {
      return res.send(result)
    })
}

export {
  echo,
  getUsersAll
}
