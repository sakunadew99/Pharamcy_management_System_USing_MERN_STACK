const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUserById);
router.post('/addusers', controller.addUser);
router.put('/updateusers', controller.updateUser);
router.delete('/deleteusers', controller.deleteUser);

module.exports = router;