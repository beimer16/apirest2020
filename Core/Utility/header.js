const express = require("express");
const bodyParser = require('body-parser');
const header = express();
header.use(bodyParser.urlencoded({ extended: false }));
header.use(bodyParser.json());
module.exports = header;