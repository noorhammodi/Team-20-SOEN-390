const express = require('express');

const getPatientRouter = express.Router();

const jwt = require('jsonwebtoken');

const doc = require('../models/doctors');
const dil = require('../models/user');

/* eslint-disable */ 
getPatientRouter.post('/', async (req, res) => {
  const { body } = req;

  const pros = process.env.ACCESS_TOKEN_SECRET;

  const decoded = await jwt.verify(body.auth, pros, (err, token) => token);

  if (decoded.role === 'doctor') {
    const doctorEmail = decoded.email;
    console.log(doctorEmail);

    // const patientEmail = body.patient;

    const docc = await doc.findOne({
      email: doctorEmail,
    });
    console.log(docc);

    const patientslist = docc.patients;

    const records = await dil.find().where('email').in(patientslist).exec();
    console.log(records)
    return res.status(200).json(records);
  }
});

module.exports = getPatientRouter;
