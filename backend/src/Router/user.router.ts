// src/routes/authRouter.ts

import { Router } from 'express';
import { AuthController } from '../controller/auth.controller';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.post('/verify-reset-code', authController.verifyResetCode);
authRouter.post('/reset-password', authController.resetPassword);
authRouter.post('/book-ticket', authController.bookTicket);
authRouter.get('/users', authController.getAllUsers);

export default authRouter;
