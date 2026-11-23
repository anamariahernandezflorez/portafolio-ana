import { Router } from 'express';
import { createMessage } from '../controllers/messageController.js';
import { validateMessage } from '../middlewares/validateMessage.js';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';

const router = Router();
router.post('/', contactRateLimiter, validateMessage, createMessage);

export default router;