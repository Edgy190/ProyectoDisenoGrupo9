import express from "express";

import { getAllParkings, getParking, createParking, updateParking, deleteParking } from "../controllers/ParkingsController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES PARKING
router.get('/', getAllParkings);
router.get('/:id', getParking);
router.post('/', createParking);
router.put('/:id', updateParking);
router.delete('/:id', deleteParking);

export default router;