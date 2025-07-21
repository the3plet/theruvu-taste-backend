import { Router } from "express";
import { FoodItemController } from "../controllers/fooditem.controller";
import { authenticate } from "../../../middlewares/auth.middlewares";

const router =Router()

router.get('/:id',FoodItemController.getById)
router.get('/foodspot/:foodSpotId',FoodItemController.getByFoodSpot)
router.post('/',authenticate,FoodItemController.create)
router.patch('/:id',authenticate,FoodItemController.update)
router.delete('/:id',authenticate,FoodItemController.delete)
router.patch('/:id/toggle',authenticate,FoodItemController.toggleAvailability)

export default router
