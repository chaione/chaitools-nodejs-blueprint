import server from '../../src'
import Promise from 'bluebird'
import request  from 'supertest'

import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('user creation', function () {
  let models

  before(() => {
    console.log('before')
    return require('../../src/models').sequelize.sync()
  })

  beforeEach(() => {
    models = require('../../src/models')

    return Promise.all([
      models.Book.destroy({ where: {} }),
      models.User.destroy({ where: {} })
    ])
  })

  it('lists a user if there is one', function (done) {
    const user = {
      username: 'Test'
    }

    models.User.create(user)
      .then(() => {
        chai.request(server)
          .get('/api/v1/users')
          .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res.body[0].username).to.equal(user.username)
            done()
          })
      })
  })
})
