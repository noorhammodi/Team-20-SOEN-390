const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');

const verifyJWTAuth = (request, response, next) => {
  const headerToken = request.headers['x-access-token'];
  if (headerToken === 'null') {
    // No token: 401
    response.json({ auth: false, message: 'No token found in request' });
  } else {
    const token = headerToken.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {}, (err, decoded) => {
      if (err) {
        // Bad token: 403
        response.json({ auth: false, message: 'User authentication failed' });
      } else {
        request.userId = decoded.id;
        next();
      }
    });
  }
};

authRouter.get('/validate', verifyJWTAuth, async (request, response) => {
  response.status(200).json({ auth: true, message: 'User authentication successful' });
});

module.exports = authRouter;
