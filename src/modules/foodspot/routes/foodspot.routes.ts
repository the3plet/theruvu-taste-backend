import { Router } from "express";
import { FoodspotController } from "../controllers/foodspot.controller.js";

const router= Router();

router.post('/',FoodspotController.create)
router.get('/',FoodspotController.getAll)
router.get('/:id',FoodspotController.getById)
router.put('/:id',FoodspotController.update)
router.delete('/:id',FoodspotController.delete)

export default router