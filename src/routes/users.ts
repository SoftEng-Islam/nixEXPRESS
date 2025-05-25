import { Router } from 'express';
import { createUser, getUsers, getUsersById } from '../handlers/users';
import { create } from 'domain';
const router = Router();

// /api/users
router.get('/', getUsers);

// /api/user/123
router.get('/:id', getUsersById);

router.post('/', createUser);

export default router;
