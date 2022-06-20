import express from "express";

import { getUserFuncionario } from "../controllers/UsersController.js";

const router = express.Router();
////////////////////////////////////////////////////ROUTES
router.get('/', getUserFuncionario);

export default router;