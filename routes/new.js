const express = require('express');
const router = express.Router();

const hoecontroller = require("../controllers/users_controller");

console.log("xcvc");

router.get('/profile',hoecontroller.hoe);

router.get('/sign-in',hoecontroller.signin);
router.get('/sign-up',hoecontroller.signup);

router.post('/create',hoecontroller.create);

module.exports = router; 