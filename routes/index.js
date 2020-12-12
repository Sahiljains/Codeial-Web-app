const express = require('express');
const router = express.Router();

const homecontroller = require("../controllers/home_controller");

console.log("dsfsd");

router.get('/',homecontroller.home);

router.use('/new',require('./new'));
//router.use('/routerName',require('./routerfile'));

module.exports = router;