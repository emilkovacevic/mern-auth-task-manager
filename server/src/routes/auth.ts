import express from 'express';
import { register, login, refreshToken, logout } from '../controllers/authController';

const authrouter = express.Router();
authrouter.route('/register').post(register);
authrouter.route('/login').post(login);
authrouter.route('/logout').post(logout);
authrouter.route('/refresh-token').get(refreshToken);

export default authrouter;
