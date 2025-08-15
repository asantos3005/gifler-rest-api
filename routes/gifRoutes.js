const express = require('express');
const router = express.Router();
const gifController = require('../controllers/gifController.js');
const upload = require('../middleware/upload');

// Handles POST /api/gifs
router.post('/create', upload.array('images'), gifController.createGif);

module.exports = router;