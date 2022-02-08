const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)



test('/ is accessible', async () => {
  await api
    .get('/')
    .expect(200)
})

test('/status is accessible', async () => {
  await api
    .get('/status')
    .expect(200)
})

describe('When the User database is initially empty', () => {
  // We don't have a command to delete yet
  // instead we try to create a test user (if not already created)
  beforeAll(async () => {
    await User.deleteMany({})
    
  })
  
  test('Can Register (Old way)', async () => {
    const result = await api
      .post('/rest/api/add-user')
      // this is how to send a payload
      .send({
        email: 'test',
        hin: 'test',
        password: 'test',
        firstName: 'test',
        lastName: 'test',
        role: 'Patient'
      })
      .expect(200)
  })

  test('Can Login (Old way)', async () => {
    // this test expects a test user already created
    const result = await api
      .post('/rest/api/login')
      .send({
        email: 'test',
        password: 'test'
      })
      .expect(200)

    console.log(result)
    const body = result.body[0]

    expect(body.email).toContain('test')
    expect(body.hin).toContain('test')
    expect(body.password).toContain('test')
    expect(body.firstName).toContain('test')
    expect(body.lastName).toContain('test')
    expect(body.role).toContain('Patient')
  })

  test('Cannot Login with bad credentials', async () => {
    const result = await api
      .post('/rest/api/login')
      .send({
        email: 'bad',
        password: 'credentials'
      })
      .expect(200)

    expect(result.text).toContain('invalid')
  })

  test('Can register with new fn under /rest/api/register', async () => {
    const result = await api
      .post('/rest/api/register')
      .send({
        email: 'legit',
        hin: 'legit',
        password: 'legit',
        firstName: 'legit',
        lastName: 'legit',
        role: 'Patient'
      })
      .expect(200)
  })
})
// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close()
})