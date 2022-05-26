import express from "express";

import { getAllVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle } from "../controllers/VehiclesController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES VEHICLE
router.get('registrarVehiculo/', getAllVehicles);
router.get('registrarVehiculo/:id', getVehicle);
router.post('registrarVehiculo/', createVehicle);
router.put('registrarVehiculo/:id', updateVehicle);
router.delete('registrarVehiculo/:id', deleteVehicle);

export default router;