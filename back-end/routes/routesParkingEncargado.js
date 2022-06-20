import express from "express";

import { getParkingEmail } from "../controllers/ParkingsController.js";

const router = express.Router();

////////////////////////////////////////////////////ROUTES PARKING ENCARGADO
router.get('/:use_email', getParkingEmail);

export default router;