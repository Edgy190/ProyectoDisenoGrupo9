import express from "express";

import { auth } from "../controllers/UsersController.js";

const router = express.Router();
////////////////////////////////////////////////////ROUTES
router.post('/', auth);

export default router;