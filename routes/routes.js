import express from 'express';
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get(`/users`, getAllUsers);
router.post(`/users`, addUser);
router.put(`/users`, updateUser);
router.delete(`/users/:userId`, deleteUser);

export default router;
