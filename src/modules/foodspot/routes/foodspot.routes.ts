import { Router } from "express";
import { FoodspotController } from "../controllers/foodspot.controller";
import { authenticate } from "../../../middlewares/auth.middlewares";

const router = Router();

router.post("/", authenticate, FoodspotController.create);
router.get("/", FoodspotController.getAll);
router.get("/:id", FoodspotController.getById);
router.put("/:id", authenticate, FoodspotController.update);
router.delete("/:id", authenticate, FoodspotController.delete);

export default router;
