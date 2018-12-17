const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/items.controller');

router.get('/items', ItemsController.getItemsList);

router.get('/items/:id', ItemsController.getItem);

module.exports = router;