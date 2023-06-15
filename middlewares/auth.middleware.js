const jwtUtils = require('../utils/jwt.utils');

module.exports = async function (req,res,next){
    try {
        // const {accessToken} = req.cookies;
        // check for accessToken in a header called auth-token
         const accessToken = req.header('auth-token'); 
        // console.log(accessToken)
        if(!accessToken){
            throw new Error('Access token not found');
        }
        const userData =  jwtUtils.verifyAccessToken(accessToken);
        if(!userData){
            throw new Error('Invalid access token');
        }
        req.user = userData;
        next();
    } catch (error) {
        res.status(401).json({message: error.message});
    }
} 