import express from 'express';
import { verifyApiKey } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyApiKey, (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'production'
    });
});

export default router;