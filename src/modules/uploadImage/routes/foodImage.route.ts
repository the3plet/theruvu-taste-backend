import { Router } from "express";
import { FoodSpotImageController } from "../controllers/foodSpotImage.controller";
import { upload } from "../../../middlewares/upload";
import { authenticate } from "../../../middlewares/auth.middlewares";
import { FoodItemImageController } from "../controllers/foodItemImage.controller";

const router = Router();

router.post(
  "/foodSpot/:foodSpotId",
  authenticate,
  upload.single("image"),
  FoodSpotImageController.updateImage
);
router.post(
  "/foodItem/:foodItemId",
  authenticate,
  upload.single("image"),
  FoodItemImageController.updateImage
);
router.delete("/foodspot/:foodSpotId",authenticate,FoodSpotImageController.deleteImage)
router.delete("/foodItem/:foodItemId",authenticate,FoodItemImageController.deleteImage)

export default router;
