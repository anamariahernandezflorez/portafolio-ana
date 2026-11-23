import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Demasiados intentos. Intenta más tarde.' },
    standardHeaders: true,
    legacyHeaders: false,
});