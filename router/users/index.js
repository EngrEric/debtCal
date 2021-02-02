const express =require('express');
const helpers = require('./helper');

const router = express.Router();

const { getAllUsers, getUserById } = helpers;

// function validateId (req, res, next){
//   if (!isNaN(req.params.id)) {
//     return next();
//   }
//   next(new Error(" invalid id"));
// }
router.get('/findusers',  getAllUsers);
router.get('/oneUser/:id', getUserById);

//router.put('/userUpdate/:userId', userUpdate);

module.exports = router;
