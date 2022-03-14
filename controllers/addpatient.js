const express = require('express');

const addPatientRouter = express.Router();

const jwt = require('jsonwebtoken');

const doc = require('../models/doctors');

addPatientRouter.post('/', async (req) => {
  const { body } = req;

  const pros = process.env.ACCESS_TOKEN_SECRET;

  const decoded = await jwt.verify(body.auth, pros, (err, token) => token);

  if (decoded.role === 'doctor') {
    const doctorEmail = decoded.email;
    console.log(doctorEmail);

    const patientEmail = body.patient;

    const docc = await doc.findOne({
      email: doctorEmail,
    });
    console.log(docc);

    const patientslist = docc.patients;
    patientslist.push(patientEmail);

    doc.updateOne(
      { email: doctorEmail },
      { patients: patientslist },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated Docs : ', docs);
        }
      },
    );
  }
});

module.exports = addPatientRouter;
