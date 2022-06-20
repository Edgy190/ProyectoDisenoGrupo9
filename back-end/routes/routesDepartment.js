import express from "express";

import { getAllDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } from "../controllers/DepartmentsController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES DEPARTMENT
router.get('/', getAllDepartments);
router.get('/:name_department', getDepartment);
router.post('/', createDepartment);
router.put('/:name_department', updateDepartment);
router.delete('/:name_department', deleteDepartment);

export default router;