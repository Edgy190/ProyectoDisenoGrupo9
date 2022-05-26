import express from "express";

import { getAllDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } from "../controllers/DepartmentsController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES DEPARTMENT
router.get('/', getAllDepartments);
router.get('/:id', getDepartment);
router.post('/', createDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

export default router;