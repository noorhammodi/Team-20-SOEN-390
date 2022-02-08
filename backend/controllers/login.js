const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const { body } = request;
  const user = await User.findOne({
    email: body.email
  })

  // Password Checking
  const isCorrectPassword = user === null
    ? false
    : body.password === user.password

  if (!(user && isCorrectPassword)) {
    return response.status(401).json({
      error: 'Error: Invalid Username or Password'
    })
  }

  return response.status(200).json({
    email: user.email,
    hin: user.hin,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role
  })
})

module.exports = loginRouter;