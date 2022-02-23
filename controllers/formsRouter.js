const express = require('express');
// TODO_LATER: const bcrypt = require('bcrypt');

const formsRouter = express.Router();
const HealthForm = require('../models/healthform');
// TODO_LATER: const config = require('../utils/config');

// Submit a new health form
formsRouter.post('/healthform', async (request, response) => {
  // Get request.body and put it in new var body
  const { body } = request;

  // Using body, set new payload
  const healthform = new HealthForm({
    feverOrChills: body.feverOrChills,
    suddenLossOfSenseOfSmellAndTaste: body.suddenLossOfSenseOfSmellAndTaste,
    difficultyBreathingOrShortnessOfBreath: body.difficultyBreathingOrShortnessOfBreath,
    cough: body.cough,
    runnyOrStuffyNose: body.runnyOrStuffyNose,
    outsideCanadaTravellingInPast14Days: body.outsideCanadaTravellingInPast14Days,
    closeContactWithSuspectedCase: body.closeContactWithSuspectedCase,
    unusualSevereFatigue: body.unusualSevereFatigue,
    unusualHeadache: body.unusualHeadache,
    significantLossOfAppetite: body.significantLossOfAppetite,
    unusualOrUnexplainedMusclePainOrStiffness: body.unusualOrUnexplainedMusclePainOrStiffness,
    soreThroatWithoutObviousCause: body.soreThroatWithoutObviousCause,
  });

  // Send the payload via mongoose, wait for response then return it
  const savedHealthForm = await healthform.save();
  response.json(savedHealthForm);
});

module.exports = formsRouter;
