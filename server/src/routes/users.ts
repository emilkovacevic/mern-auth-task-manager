import express from 'express';
import { getCurrentUser, updateUser } from '../controllers/usersController';

const usersrouter = express.Router();
usersrouter.route('/user').post(getCurrentUser);
usersrouter.patch("/updateuser", updateUser);

export default usersrouter;
