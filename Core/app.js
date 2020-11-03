const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const userView = require('./Controllers/userController');
const postView = require('./Controllers/postController');
const auth = require('./Utility/auth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(auth);
app.use(userView);
app.use(postView);
app.listen(3001, () => {
    console.log("El servidor está inicializado en el puerto 3001");
   });