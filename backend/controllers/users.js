const express = require('express');

const usersRouter = express.Router();
const User = require('../models/user');

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
    role: body.role,
    associated_users: body.associated_users,
  });

  // Send the payload via mongoose, wait for response then return it
  const savedUser = await user.save();
  response.json(savedUser);
});

// Get a list of users.
usersRouter.get('/all_users', (request, response) => {
  User.find()
    .then((result) => {
      response.send(result);
      response.end();
    })
    .catch((err) => {
      console.log('The error in our jevaisbienaller app is', err);
    });
});

// Get (the information of) a particular user.
usersRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  User.findById(id)
    .then((result) => {
      response.send(result);
      response.end();
    })
    .catch((err) => {
      response.json(err);
    });
});

// Delete (the information of) a particular user.
usersRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  User.findByIdAndDelete(id)
    .then((result) => {
      response.json(result);
    })
    .catch((err) => {
      response.json(err);
    });
});

// Modify (the information of) a particular user.
usersRouter.put('/:id', async (request, response) => {
  const { id } = request.params;

  const filter = { _id: id /* , email: request.body.email, hin: request.body.hin */ };
  const update = {
    /* email: request.body.email,
    hin: request.body.hin, */
    password: request.body.password,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    role: request.body.role,
    associated_users: request.body.associated_users,
  };

  // nonModifiedUser is the document _before_ update was applied
  try {
    const nonModifiedUser = await User.findOneAndUpdate(filter, update);

    const modifiedUser = {
      email: request.body.email,
      hin: request.body.hin,
      password: request.body.password,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      role: request.body.role,
      associated_users: request.body.associated_users,
    };

    response.json(
      {
        beforeModification: nonModifiedUser,
        afterModification: modifiedUser,
      },
    );
  } catch (err) {
    response.json(err);
  }
});

module.exports = usersRouter;
