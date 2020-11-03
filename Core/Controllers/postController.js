let response = require('../Utility/response');
let postController = require('../Utility/header');
let postModelView = require('../ModelViews/postModelView');
const config = require('../Utility/config');
let jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const beareHeader = req.headers['authorization']
  if (typeof beareHeader !== undefined) {
    const beareToken = beareHeader.split(" ")[1];
    req.token = beareToken;
     next();
  } else {
    res.send(404);
  }
}

postController.post('/api/post', verifyToken, (req, res) => {
  jwt.verify(req.token, config.wordSecret, (error, data) => {
    if (error) {
      response =
      {
        error: true,
        code: 500,
        message: 'TimeOut verify token',
        object: null
      };
      res.send(response)
    }
    else {
      post = new postModelView(
        {
          _idPost: Date.now(),
          tittlePost: req.body.tittlePost,
          containtPost: req.body.containtPost,
          datecreatePost: Date.now(),
          imgPost: req.body.imgPost,
          _idUserPost: req.body._idUserPost
        });
      response =
      {
        error: false,
        code: 200,
        messege: 'Success Create',
        response: post
      };
      post.save(function () {
        res.send(response);
      });
    }
  });
});

postController.get("/api/post/:id", verifyToken,  function (req, res) {
  if (!req.params.id) {
    response =
    {
      error: true,
      code: 502,
      message: 'Not exists params',
      object: null
    };
  }
  else {
    jwt.verify(req.token, config.wordSecret, async (error, data) => 
    {
      if (error)
      {
        response =
        {
          error: true,
          code: 500,
          message: 'TimeOut verify token',
          object: null
        };
        res.send(response)
      }
      else 
      {
        let _post = await postModelView.find({ _idPost: req.params.id })
        response =
        {
          error: true,
          code: 200,
          message: 'Post User Found',
          object: _post
        }
        res.send(response);
      };
    });
   }
});

postController.get("/api/post", verifyToken, async function (req, res) {
  var mysort = {_idUPost: -1};
  if (!req.body._idUserPost) {
    response =
    {
      error: true,
      code: 502,
      message: 'Not exists params',
      object: null
    };
  }
  else {
    let _post = await postModelView.find({_idUserPost: req.body._idUserPost}).limit(10).skip(req.body.pag).sort(mysort);
    console.log(_post);
    response =
    {
      error: false,
      code: 200,
      message: 'Post User Found',
      object: _post
    }
  };
  res.send(response);
});

postController.put('/api/post/:id', verifyToken, function (req, res) {
  if (!req.params.id) {
    response =
    {
      error: true,
      code: 502,
      message: 'Not exists params',
      object: null
    };
  }
  else {
    jwt.verify(req.token, config.wordSecret, async  (error, data) => {
      if (error) {
        response =
        {
          error: true,
          code: 500,
          message: 'TimeOut verify token',
          object: null
        };
        res.send(response)
      }
      else {
        let _post = await postModelView.find({ _idPost: req.params.id })
        post = new postModelView(
          {
            tittlePost: _post.tittlePost,
            containtPost: _postcontaintPost,
            imgPost: _post.imgPost,

          });
        response =
        {
          error: true,
          code: 200,
          message: 'Post User Found',
          object: _post
        }
      };
    });
    res.send(response);
  }
});

module.exports = postController

