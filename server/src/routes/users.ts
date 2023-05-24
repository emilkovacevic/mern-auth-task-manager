import express from 'express';
import { getCurrentUser } from '../controllers/usersController';

const usersrouter = express.Router();
usersrouter.route('/user').post(getCurrentUser);

export default usersrouter;
