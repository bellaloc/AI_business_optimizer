// server.js

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/errorHandler');
const predictiveAnalyticsRoutes = require('./routes/predictiveAnalyticsRoutes');
const { PORT } = require('./config/constants');
const connectDatabase = require('./config/database');

// Connect to MongoDB
connectDatabase();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/predictive-analytics', predictiveAnalyticsRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
