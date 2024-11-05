import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { inject } from "@vercel/analytics";
import { initializeEnv } from './config/env.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandlers.js';
import healthRouter from './routes/route.js';
import pagesRouter from './routes/pages.js';

// Initialize environment and analytics
initializeEnv();
inject();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware setup
app.use(morgan('combined'));
app.use(helmetConfig);
app.use(rateLimiter);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d'
}));

// Routes
app.use('/routes/health', healthRouter);
app.use('/', pagesRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;