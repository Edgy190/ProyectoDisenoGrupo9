import express from "express";

import { getAllVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle } from "../controllers/VehiclesController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES VEHICLE
router.get('registrarVehiculo/', getAllVehicles);
router.get('registrarVehiculo/:vehicle_plate', getVehicle);
router.post('registrarVehiculo/', createVehicle);
router.put('registrarVehiculo/:vehicle_plate', updateVehicle);
router.delete('registrarVehiculo/:vehicle_plate', deleteVehicle);

export default router;