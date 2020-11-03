let authController = require('../Utility/header');
let userModelView = require('../ModelViews/userModelView');
let response = require('../Utility/response');
const jwt = require('jsonwebtoken');
const config = require('../Utility/config');
let _userArray = [];
let aes256 = require('aes256');
let _pwd;

function encrypt(parameter) {
    var encrypted = aes256.encrypt(config.key, parameter);
    return encrypted

}

function decrypt(parameter) {
    var decrypted = aes256.decrypt(config.key, parameter);
    return decrypted
}

authController.post('/api/auth', function (req, res) {
    if (!req.body.emailUser || !req.body.pwdUser) {
        response =
        {
            error: true,
            code: 502,
            message: 'This Fiels are required'
        };
    }
    else {

        _user = userModelView.find({ emailUser: req.body.emailUser }, function (err, obj) 
        {
           
            if (obj!=null) {
          
                _pwd = decrypt(obj[0].pwdUser);
                console.log(_pwd);
                if (req.body.pwdUser == _pwd) {
                    const payload = {
                        check: true
                    };
                    if (req.body.pwdUser == _pwd) {
                        let token = jwt.sign(payload, config.wordSecret,
                            {
                                expiresIn: '1hr'
                            });
                        res.json({
                            message: 'Success Authentication',
                            token: token,
                            object: obj
                        });
                    }
                }
            }
            /*for (let i = 0; i < doc.length; ++i) {
                _userArray.push(doc[i]);
            }
            _userArray.forEach(ele => {
                const payload = {
                    check: true
                };
                _pwd = decrypt(ele.pwdUser);
                if (req.body.pwdUser == _pwd) {
                    let token = jwt.sign(payload, config.wordSecret,
                        {
                            expiresIn: '1hr'
                        });
                    res.json({
                        message: 'Success Authentication',
                        token: token
                    });
                }
            })*/
        });

    }

});
module.exports = authController;
