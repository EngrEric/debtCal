const express =require('express');
const helpers = require('./helper');

const router = express.Router();

const { getAllUsers } = helpers;

router.get('/findusers', getAllUsers);
//router.put('/userUpdate/:userId', userUpdate);

module.exports = router;
