// predictiveAnalyticsRoutes.js

const express = require('express');
const router = express.Router();
const predictiveAnalyticsController = require('../controllers/predictiveAnalyticsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for predictive analytics
router.get('/predict', authMiddleware, predictiveAnalyticsController.predict);

module.exports = router;
