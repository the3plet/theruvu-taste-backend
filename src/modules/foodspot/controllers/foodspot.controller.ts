import { AuthenticatedRequest } from "../../../types/auth.types";
import { FoodspotService } from "../services/foodspot.service";
import { Request, Response } from "express";



export const FoodspotController = {
  create: async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const ownerId = authReq.user?.userId;
      if (!ownerId) return res.status(401).json({ error: "Unauthorized" });
      
      const newSpot = await FoodspotService.createFoodspot(req.body, ownerId);
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
      const authReq = req as AuthenticatedRequest;
      const userId = authReq.user?.userId;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });

      const update = await FoodspotService.updateFoodspot(
        req.params.id,
        req.body,
        userId
      );
      res.json(update);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const userId = authReq.user?.userId;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });

      await FoodspotService.deleteFoodspot(req.params.id, userId);
      res
        .status(204)
        .json({ message: `${req.params.id} is deleted` })
        .end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};