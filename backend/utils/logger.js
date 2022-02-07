/* eslint-disable no-console */
const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    logger.info(...params)
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params)
  }
}

const debug = (...params) => {
  logger.info(...params)
}

module.exports = {
  info,
  error,
  debug,
}