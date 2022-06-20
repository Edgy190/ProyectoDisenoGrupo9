import express from "express";

import { getAllVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle } from "../controllers/VehiclesController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES VEHICLE
router.get('/', getAllVehicles);
router.get('/:vehicle_plate', getVehicle);
router.post('/', createVehicle);
router.put('/:vehicle_plate', updateVehicle);
router.delete('/:vehicle_plate', deleteVehicle);

export default router;