const express = require('express');

const addPatientRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const doc = require('../models/doctors');

addPatientRouter.post('/', async (req, res, next) => {
  const { body } = req;

  const decoded = await jwt.verify(body.auth, process.env.ACCESS_TOKEN_SECRET, (err, token) => token);

  if (decoded.role == 'doctor') {
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
