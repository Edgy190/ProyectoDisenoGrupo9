import express from "express";

import { getAllVXU, getVXU, createVXU, updateVXU, deleteVXU } from "../controllers/Vehicles_x_UsersController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES VEHICLE
router.get('/', getAllVXU);
router.get('/:vehicle_plate', getVXU);
router.post('/', createVXU);
router.put('/:vehicle_plate', updateVXU);
router.delete('/:vehicle_plate', deleteVXU);

export default router;