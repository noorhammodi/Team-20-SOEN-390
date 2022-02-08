const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const logger = require('../utils/logger')
const config = require('../utils/config')
const User = require('../models/user')

const api = supertest(app)

describe('Static routes tests', () => {
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
})

describe('When the User database is initially empty', () => {
  beforeAll(async () => {
    // Clean the test database first
    await User.deleteMany({})
    logger.testinfo(`Using DB: ${config.DBNAME}`)
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
    // this test expects a test user already created (must be after registration)
    const result = await api
      .post('/rest/api/login')
      .send({
        email: 'test',
        password: 'test'
      })
      .expect(200)

    const body = result.body[0]

    expect(body.email).toContain('test');
    expect(body.hin).toContain('test');
    expect(body.password).toContain('test');
    expect(body.firstName).toContain('test');
    expect(body.lastName).toContain('test');
    expect(body.role).toContain('Patient');
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

  test('Can register on /api/users', async () => {
    const result = await api
      .post('/api/users')
      .send({
        email: 'legit',
        hin: 'legit',
        password: 'legit',
        firstName: 'legit',
        lastName: 'legit',
        role: 'Patient'
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('Can login on /api/login', async () => {
    const result = await api
      .post('/api/login')
      .send({
        email: 'legit',
        password: 'legit'
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
   
    const body = result.body;
    expect(body.email).toContain('legit');
    expect(body.hin).toContain('legit');
    expect(body.password).toContain('legit');
    expect(body.firstName).toContain('legit');
    expect(body.lastName).toContain('legit');
    expect(body.role).toContain('Patient');
  })

  test('Cannot login on /api/login with bad credentials', async ()=> {
    const result = await api
      .post('/api/login')
      .send({
        email: 'legit',
        password: 'notlegit'
      })
      .expect(401)
      .expect('Content-Type', /application\/json/)

    const body = result.body;
    expect(body.error).toContain('Invalid Username or Password')
  })
})

// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close()
})