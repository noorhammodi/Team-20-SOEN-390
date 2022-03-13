/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const HealthForm = require('../models/user');

// Run our backend under test
const api = supertest(app);

const TEST_HEALTHFORM1 = {
  feverOrChills: false,
  temperature: 0,
  suddenLossOfSenseOfSmellAndTaste: false,
  difficultyBreathingOrShortnessOfBreath: true,
  cough: false,
  runnyOrStuffyNose: true,
  outsideCanadaTravellingInPast14Days: false,
  closeContactWithSuspectedCase: true,
  unusualSevereFatigue: false,
  unusualHeadache: true,
  significantLossOfAppetite: false,
  unusualOrUnexplainedMusclePainOrStiffness: true,
  soreThroatWithoutObviousCause: false,
};

const TEST_HEALTHFORM2 = {
  feverOrChills: true,
  temperature: 0,
  suddenLossOfSenseOfSmellAndTaste: false,
  difficultyBreathingOrShortnessOfBreath: true,
  cough: false,
  runnyOrStuffyNose: true,
  outsideCanadaTravellingInPast14Days: false,
  closeContactWithSuspectedCase: true,
  unusualSevereFatigue: false,
  unusualHeadache: true,
  significantLossOfAppetite: false,
  unusualOrUnexplainedMusclePainOrStiffness: true,
  soreThroatWithoutObviousCause: false,
};

const TEST_HEALTHFORM3 = {
  feverOrChills: false,
  temperature: 30,
  suddenLossOfSenseOfSmellAndTaste: false,
  difficultyBreathingOrShortnessOfBreath: true,
  cough: false,
  runnyOrStuffyNose: true,
  outsideCanadaTravellingInPast14Days: false,
  closeContactWithSuspectedCase: true,
  unusualSevereFatigue: false,
  unusualHeadache: true,
  significantLossOfAppetite: false,
  unusualOrUnexplainedMusclePainOrStiffness: true,
  soreThroatWithoutObviousCause: false,
};

const TEST_HEALTHFORM4 = {
  feverOrChills: true,
  temperature: 30,
  suddenLossOfSenseOfSmellAndTaste: false,
  difficultyBreathingOrShortnessOfBreath: true,
  cough: false,
  runnyOrStuffyNose: true,
  outsideCanadaTravellingInPast14Days: false,
  closeContactWithSuspectedCase: true,
  unusualSevereFatigue: false,
  unusualHeadache: true,
  significantLossOfAppetite: false,
  unusualOrUnexplainedMusclePainOrStiffness: true,
  soreThroatWithoutObviousCause: false,
};

describe('REST API request on /api/forms/healthform', () => {
  test('POST /api/forms/healthform with feverOrChills being false and temperature not being included is successful', async () => {
    await api
      .post('/api/forms/healthform')
      .send(TEST_HEALTHFORM1)
      .expect(200);
  });

  test('POST /api/forms/healthform with feverOrChills being true and temperature not being included is successful but temperature is not taken in the database', async () => {
    await api
      .post('/api/forms/healthform')
      .send(TEST_HEALTHFORM2)
      .expect(200);
  });

  test('POST /api/forms/healthform with feverOrChills being false and temperature being included is successful but temperature are not taken in the database', async () => {
    await api
      .post('/api/forms/healthform')
      .send(TEST_HEALTHFORM3)
      .expect(200);
  });

  test('POST /api/forms/healthform with feverOrChills being true and temperature being included is successful', async () => {
    await api
      .post('/api/forms/healthform')
      .send(TEST_HEALTHFORM4)
      .expect(200);
  });
});

// Close mongoose connection from supertest(app)
afterAll(() => {
  mongoose.connection.close();
});
