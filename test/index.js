import st from 'supertest'

import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import server from '../src/index.js'

describe('API server up', () => {
  it('responds to /heartbeat', done => {
    chai.request(server)
      .get('/heartbeat')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })

  it('404 everything else', done => {
    chai.request(server)
      .get('/foo/bar')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })
})
