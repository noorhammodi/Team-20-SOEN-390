const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/user');
const usersHelper = require('./usersHelper');

// Run our backend under test
const api = supertest(app);

// Get predefined test users from usersHelper
const { TEST_PATIENT1, TEST_PATIENT2 } = usersHelper.testPatients;
const { TEST_DOCTOR1 } = usersHelper.testDoctors;

describe('REST API requests on /api/users/ (expects test users to be added)', () => {
  beforeAll(async () => {
    // Clean the test database first
    await User.deleteMany({});

    // Add the Test Users through Mongoose instead of API
    await new User(TEST_PATIENT1).save();
    await new User(TEST_DOCTOR1).save();
  });

  test('POST /api/users : TEST_PATIENT2 can register', async () => {
    // Precondition: user should not already exist
    const isUserExist = await User.findOne({ email: TEST_PATIENT2.email });
    expect(isUserExist).toBeNull();

    // Register using the patient payload
    await api
      .post('/api/users')
      .send(TEST_PATIENT2)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    // Postcondition: user should exist in the mongodb database
    const addedUser = await User.findOne({ email: TEST_PATIENT2.email });
    expect(addedUser.email).toContain(TEST_PATIENT2.email);
  });
});

// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close();
});
