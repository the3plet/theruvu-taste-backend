import { Router } from "express";
import {
  SearchFoodItemController,
  SearchFoodSpotController,
} from "../controllers/search.controller";

const router = Router();

router.get("/foodspot", SearchFoodSpotController.search);
router.get("/fooditem", SearchFoodItemController.search);

export default router;
