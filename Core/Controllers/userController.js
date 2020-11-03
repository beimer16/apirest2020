let response = require('../Utility/response');
let userController = require('../Utility/header');
let userModelView = require('../ModelViews/userModelView');
let aes256 = require('aes256');
let config = require('../Utility/config');
const filter = {}
const _id = "";

function encrypt(parameter) {
  var encrypted = aes256.encrypt(config.key, parameter);
  return encrypted
}


userController.get('/api/user', async function (req, res) {
  const userall = await userModelView.find();
  response =
  {
    error: true,
    code: 200,
    message: 'Users Found',
    object: userall
  };
  res.send(response);
});


userController.get("/api/user/:id", async function (req, res) {
  if (!req.params.id) {
    response =
    {
      error: true,
      code: 502,
      message: 'Not exists params',
      object: null
    };
  } else {
    let _user = await userModelView.find({ _idUser: req.params.id })
    console.log(_user);
    response =
    {
      error: true,
      code: 200,
      message: 'User Found',
      object: _user
    }
  };
  res.send(response);
});

userController.post('/api/user', function (req, res) {
  if (!req.body.emailUser || !req.body.pwdUser) {
    response =
    {
      error: true,
      code: 502,
      message: 'This Fiels are required',
      object: null
    };
  }
  else {
    user = new userModelView(
      {
        _idUser: Date.now(),
        nameUser: req.body.nameUser,
        lastnameUser: req.body.lastnameUser,
        emailUser: req.body.emailUser,
        pwdUser: encrypt(req.body.pwdUser)
      });

    response =
    {
      error: false,
      code: 200,
      messege: 'Success Create',
      object: user
    };
  }
  user.save(function () {
    res.send(response);
  });
});


userController.put('/api/user/:id', async function (req, res) {
  let _user = await userModelView.find({ _idUser: req.params.id });
  if (_user[0]._idUser == req.body._idUser) {

    user = new userModelView(
      {
        nameUser: req.body.nameUser,
        lastnameUser: req.body.lastnameUser,
        emailUser: req.body.emailUser,
        pwdUser: encrypt(req.body.pwdUser)
      });
      response =
      {
        error: false,
        code: 200,
        messege: 'Success Create',
        object: user
      };
    user.save(function () {
      res.send(response);
    });
  }else{
    response =
    {
      error: false,
      code: 404,
      messege: 'Not Found',
      object: null
    };
  }
});


userController.delete('/api/user/:id', async function (req, res) {
  let _user = await userModelView.find({ _idUser: req.params.id });
  //console.log(_user[0])
  if (_user[0]._idUser == req.params.id) {
   /* user = new userModelView(
      {
        _idUser:_user._idUser,
        nameUser: _user.nameUser,
        lastnameUser:_user.lastnameUser,
        emailUser: _user.emailUser,
        pwdUser: _user.pwdUser
      });*/
    response =
    {
      error: false,
      code: 200,
      messege: 'Success Delete',
      object: []
    };
    _user.delete(function () {
      res.send(response);
    });
  }else{
    response =
    {
      error: false,
      code: 404,
      messege: 'Not Found',
      object: null
    };
  }
});


module.exports = userController;