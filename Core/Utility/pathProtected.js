const config = require('../Utility/config');
let jwt = require('jsonwebtoken');
 module.exports = async (req, res, next) => {
  let token = req.headers['access-token'];
  if (token) 
  {
    jwt.verify(token, config.wordSecret, (err, decoded) => {      
      if (err) {
        return res.json({ mensaje: 'Token inválida' });    
      } else {
       // req.decoded = decoded;    
        next();
      }
    });
  } else {
    res.send({ 
        mensaje: 'Token no proveída.' 
    });
  }
}
