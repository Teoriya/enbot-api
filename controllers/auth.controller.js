const jwtUtils = require("../utils/jwt.utils");
const UserService = require("../services/user.service");

class AuthController {
  
    async login(req, res) {
    const { email,name,provider_id} = req.body;
    //if any of the above fields are missing return an invalid request error
    if (!(email && name && provider_id)) {
        return res.status(400).send({ error: "Missing required fields" });
    }
    const userData = await UserService.findUserAndCreateIfNotFound(provider_id,email,name);
    const token =  jwtUtils.generateToken(userData);
    
    res.setHeader("auth-token", token);

    return res.send({ user: userData, token });
    }

    async getUser(req, res) {
        const { user } = req;
        return res.send({ user });
    }
}

module.exports = new AuthController();
