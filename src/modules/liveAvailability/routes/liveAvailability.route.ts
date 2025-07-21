import { Router } from "express";
import { LiveAvailabilityController } from "../controllers/liveAvailability.controller";

const router = Router()

router.get('/:foodSpotId',LiveAvailabilityController.getAvilability)

export default router