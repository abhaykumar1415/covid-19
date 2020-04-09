const jwt   = require('jsonwebtoken');
import JWT_TOKEN from '../config/jwt';

const options = JWT_TOKEN;
const secretKey = 'xS0Lcp2CToYCGDZ2hXRSThEoYxNda9SmfMuNB';

const createJWTtoken = (deviceId) =>{
  var token = jwt.sign({ deviceId: deviceId }, secretKey);
  return token;

}
const verifyRequestAuth = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if ( token ) {
    try {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          next();
        }
      });
    }
    catch(err) {
    }
  } else {
    return res.json({
      success: false,
      message: 'Token not found'
    });
  }
}

const Auth = { verifyRequestAuth, createJWTtoken }
export default Auth;
