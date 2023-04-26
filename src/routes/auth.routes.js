import { Router } from 'express';
import { check } from 'express-validator';


import { getUser, googleSignIn, login, logout } from '../controllers/auth.controller.js';
import { validateFields } from '../middlewares/validate-fields.js';


const router = Router();

router.post('/auth', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login);
router.post('/google', [
    check('credential', 'Google Credential is required').not().isEmpty(),
    validateFields
], googleSignIn);

router.get('/profile', getUser);
router.post('/logout', logout);


export default router;