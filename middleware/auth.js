export const verifyApiKey = (req, res, next) => {
    const providedKey = req.headers['x-api-key'];
    const apiKey = process.env.API_KEY;

    if (!providedKey || providedKey !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }
    next();
};