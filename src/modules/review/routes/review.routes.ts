import { Router } from "express";
import { authenticate } from "../../../middlewares/auth.middlewares";
import { ReviewController } from "../controllers/review.controller";

const router = Router();

router.get("/", ReviewController.getAll);
router.post("/", authenticate, ReviewController.create);
router.get("/foodspot/:foodSpotId", ReviewController.getByFoodspot);
router.put("/:reviewId", authenticate, ReviewController.update);
router.delete("/:reviewId", authenticate, ReviewController.delete);

export default router;
