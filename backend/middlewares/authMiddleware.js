// authMiddleware.js

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/constants');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
