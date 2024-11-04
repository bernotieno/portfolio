import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const notFoundHandler = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public', '404.html'));
};

export const errorHandler = (err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).sendFile(path.join(__dirname, '../public', '500.html'));
};