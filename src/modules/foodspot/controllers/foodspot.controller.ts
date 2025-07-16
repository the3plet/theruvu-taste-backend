import { FoodspotService } from "../services/foodspot.service.js";
import { Request, Response } from "express";

export const FoodspotController = {
  create: async (req: Request, res: Response) => {
    try {
      const newSpot = await FoodspotService.createFoodspot(req.body);
      res.status(201).json(newSpot);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  getAll: async (_req: Request, res: Response) => {
    try {
      const foodSpot = await FoodspotService.getAllFoodspot();
      res.json(foodSpot);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const foodSpot = await FoodspotService.getFoodspotByid(req.params.id);
      if (!foodSpot)
        return res.status(404).json({ error: "Specific FoodSpot Not Found" });
      res.json(foodSpot);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const update = await FoodspotService.updateFoodspot(
        req.params.id,
        req.body
      );
      res.json(update);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await FoodspotService.deleteFoodspot(req.params.id);
      res
        .status(204)
        .json({ message: `${req.params.id} is deleted` })
        .end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
