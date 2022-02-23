/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const HealthForm = require('../models/user');

// Run our backend under test
const api = supertest(app);

const TEST_HEALTHFORM = {
  feverOrChills: true,
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

describe('REST API request on /api/forms', () => {
  test('POST /api/forms is successful', async () => {
    await api
      .post('/api/forms/healthform')
      .send(TEST_HEALTHFORM)
      .expect(200);
  });
});
