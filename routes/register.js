var express = require('express');
var router = express.Router();
const validaciones= require('../validations/register.js')
const controller = require("../controller/registerController");

/* GET home page. */
router.get('/',controller.register);
router.post('/register',validaciones,controller.Processregister);


module.exports = router;
