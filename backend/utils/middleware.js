const { response } = require('express')
const logger = require('./logger')

// Middlewares do operations on (request, reponse) whenever they happen

const errorHandler = (error, request, response, next) => {
  // Prints error type to console
  logger.info(`${error.name}: ${error.message}`)

  if (error.name === 'ValidationError') {
    response.status(400)
    const isUserAndHinNotUnique = 
      error.message.includes('expected `email` to be unique') ||
      error.message.includes('expected `hin` to be unique')

    return isUserAndHinNotUnique
    ? response.json({ error: 'error: email or health insurance number already taken' })
    : response.json({ error: error.message })
   }
  
  next(error)
}



module.exports = {
  errorHandler,
}