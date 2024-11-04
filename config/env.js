import dotenv from 'dotenv';

export const initializeEnv = () => {
    if (process.env.NODE_ENV !== 'production') {
        dotenv.config();
    }

    const requiredEnvVars = ['API_KEY', 'SECRET_KEY'];
    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

    if (missingEnvVars.length > 0) {
        console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
        process.exit(1);
    }
};