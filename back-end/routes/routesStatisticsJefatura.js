import express from "express";

import { getUserDepartamento } from "../controllers/UsersController.js";

const router = express.Router();
////////////////////////////////////////////////////ROUTES
router.get('/:id_department', getUserDepartamento);

export default router;