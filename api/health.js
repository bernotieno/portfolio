import express from 'express';

const router = express.Router();

// Middleware to verify the API key
const verifyApiKey = (req, res, next) => {
    const providedKey = req.headers['x-api-key'];
    const apiKey = process.env.API_KEY;

    if (!providedKey || providedKey !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }
    next();
};

// Health check endpoint
router.get('/health', verifyApiKey, (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'production'
    });
});

export default router;
