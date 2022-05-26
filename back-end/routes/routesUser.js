import express from "express";

import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/UsersController.js";

const router = express.Router();
////////////////////////////////////////////////////ROUTES
router.get('/', getAllUsers);
router.get('/:email', getUser);
router.post('/', createUser);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);

export default router;