import { Request, Response } from "express";
import { FoodItemService } from "../services/fooditem.service";
import { AuthenticatedRequest } from "../../../types/auth.types";
import { foodItemSchema, updateFoodItemSchema } from "../dto/fooditem.dto";

export const FoodItemController={
    getByFoodSpot:async(req:Request,res:Response)=>{
        const {foodSpotId}=req.params
        const items= await FoodItemService.getByFoodSpot(foodSpotId)
        res.json(items)
    },
    getById:async(req:Request,res:Response)=>{
        const {id}= req.params
        const item = await FoodItemService.getById(id)
        res.json(item)
    },
    create:async(req:Request,res:Response)=>{
        const authReq= req as AuthenticatedRequest
        const userId= authReq.user?.userId
        if (!userId) return res.status(401).json({ error: "Unauthorized" });

        const parsed = foodItemSchema.safeParse(req.body)
        if (!parsed.success) return res.status(400).json(parsed.error.format());

        const item = await FoodItemService.create(parsed.data,userId)
        res.status(201).json(item)
    },
    update:async(req:Request,res:Response)=>{
        const authReq= req as AuthenticatedRequest
        const userId= authReq.user?.userId
        const {id}=req.params
        if (!userId) return res.status(401).json({ error: "Unauthorized" });

        const parsed = updateFoodItemSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error.format());

    const updated = await FoodItemService.update(id,parsed.data,userId)
    res.json(updated)

    },

     delete: async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const userId = authReq.user?.userId;
    const { id } = req.params;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const deleted = await FoodItemService.delete(id, userId);
    res.json({ message: "Deleted successfully", deleted });
  },

  toggleAvailability:async(req:Request,res:Response)=>{
    const authReq= req as AuthenticatedRequest
    const userId = authReq.user?.userId
    const {id}=req.params
      if (!userId) return res.status(401).json({ error: "Unauthorized" });

      const toggled = await FoodItemService.toggleAvilability(id,userId)
      res.json(toggled)

  }
}