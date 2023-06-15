const jwt = require('jsonwebtoken');

class JwtUtils {
  generateToken(payload) {
    const authToken =  jwt.sign(payload, process.env.JWT_SECRET_ACCESS, { expiresIn: '2h' });
    return {authToken}
  }

  async verifyAccessToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_ACCESS);
  }

}

module.exports = new JwtUtils();