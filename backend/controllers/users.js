const express = require('express');
const usersRouter = express.Router();
const User = require("../models/user")

// Register a new user
usersRouter.post('/', async (request, response) => {
  // Get request.body and put it in new var body
  const { body } = request;

  // Using body, set new payload
  const user = new User({
    email: body.email,
    hin: body.hin,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
    role: body.role
  })

  // Send the payload via mongoose, wait for response then return it
  const savedUser = await user.save()
  response.json(savedUser)
})

module.exports = usersRouter;