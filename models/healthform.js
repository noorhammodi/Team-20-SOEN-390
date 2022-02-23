const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const healthFormSchema = new mongoose.Schema({

  feverOrChills: {
    type: Boolean,
    required: true,
  },
  suddenLossOfSenseOfSmellAndTaste: {
    type: Boolean,
    required: true,
  },
  difficultyBreathingOrShortnessOfBreath: {
    type: Boolean,
    required: true,
  },
  cough: {
    type: Boolean,
    required: true,
  },
  runnyOrStuffyNose: {
    type: Boolean,
    required: true,
  },
  outsideCanadaTravellingInPast14Days: {
    type: Boolean,
    required: true,
  },
  closeContactWithSuspectedCase: {
    type: Boolean,
    required: true,
  },
  unusualSevereFatigue: {
    type: Boolean,
    required: true,
  },
  unusualHeadache: {
    type: Boolean,
    required: true,
  },
  significantLossOfApetite: {
    type: Boolean,
    required: true,
  },
  unusualOrUnexplainedMusclePainOrStiffness: {
    type: Boolean,
    required: true,
  },
  soreThroatWithoutObviousCause: {
    type: Boolean,
    required: true,
  },
});

// Bind uniqueValidator to schema
healthFormSchema.plugin(uniqueValidator);

// Make a model with the schema and mongoose credentials
const HealthForm = mongoose.model('User', healthFormSchema);

module.exports = HealthForm;
