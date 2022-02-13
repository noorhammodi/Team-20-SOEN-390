const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const logger = require('../utils/logger');
const config = require('../utils/config');
const User = require('../models/user');

// Run our backend under test
const api = supertest(app);

describe('When the User database is initially empty', () => {
  beforeAll(async () => {
    // Clean the test database first
    await User.deleteMany({});
    logger.testinfo(`Using DB: ${config.DBNAME}`);
  });

  test('Cannot Login with bad credentials', async () => {
    const result = await api
      .post('/rest/api/login')
      .send({
        email: 'bad',
        password: 'credentials',
      })
      .expect(200);

    expect(result.text).toContain('invalid');
  });

  test('Can register on /api/users', async () => {
    await api
      .post('/api/users')
      .send({
        email: 'legit',
        hin: 'legit',
        password: 'legit',
        firstName: 'legit',
        lastName: 'legit',
        role: 'Patient',
      })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('Can login on /api/login', async () => {
    const result = await api
      .post('/api/login')
      .send({
        email: 'legit',
        password: 'legit',
      })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const { body } = result;
    expect(body.email).toContain('legit');
    expect(body.hin).toContain('legit');
    expect(body.password).toContain('legit');
    expect(body.firstName).toContain('legit');
    expect(body.lastName).toContain('legit');
    expect(body.role).toContain('Patient');
  });

  test('Cannot login on /api/login with bad credentials', async () => {
    const result = await api
      .post('/api/login')
      .send({
        email: 'legit',
        password: 'notlegit',
      })
      .expect(401)
      .expect('Content-Type', /application\/json/);

    const { body } = result;
    expect(body.error).toContain('Invalid Username or Password');
  });
});

// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close();
});
