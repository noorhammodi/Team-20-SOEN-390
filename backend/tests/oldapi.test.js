const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const logger = require('../utils/logger');
const config = require('../utils/config');
const User = require('../models/user');

// Run our backend under test
const api = supertest(app);

describe('(Old Api) When the User database is initially empty', () => {
  beforeAll(async () => {
    // Clean the test database first
    await User.deleteMany({});
    logger.testinfo(`Using DB: ${config.DBNAME}`);
  });

  test('Can Register (Old way)', async () => {
    await api
      .post('/rest/api/add-user')
      // this is how to send a payload
      .send({
        email: 'test',
        hin: 'test',
        password: 'test',
        firstName: 'test',
        lastName: 'test',
        role: 'Patient',
      })
      .expect(200);
  });

  test('Can Login (Old way)', async () => {
    // this test expects a test user already created (must be after registration)
    const result = await api
      .post('/rest/api/login')
      .send({
        email: 'test',
        password: 'test',
      })
      .expect(200);

    const body = result.body[0];

    expect(body.email).toContain('test');
    expect(body.hin).toContain('test');
    expect(body.password).toContain('test');
    expect(body.firstName).toContain('test');
    expect(body.lastName).toContain('test');
    expect(body.role).toContain('Patient');
  });
});

// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close();
});
