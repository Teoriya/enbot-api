const jwt = require('jsonwebtoken');

class JwtUtils {
  generateToken(payload) {
    const authToken =  jwt.sign(payload, process.env.JWT_SECRET_ACCESS);
    return {authToken}
  }

   verifyAccessToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_ACCESS);
  }

}

module.exports = new JwtUtils();
