import { Request, Response } from "express";
import { FoodItemImageService } from "../services/foodItemImage.service";

export const FoodItemImageController = {
  updateImage: async (req: Request, res: Response) => {
    try {
      const foodItemId = req.params.foodItemId;
      const file = req.file;
      if (!file) return res.status(400).json({ error: "No image uploaded." });

      if (!foodItemId)
        return res.status(400).json({ error: "Missing FoodItem ID." });

       const imagePublicId = file.filename;
      const updated = await FoodItemImageService.updateImage(
        foodItemId,
        file.path,imagePublicId
      );
      return res.status(200).json({
        message: "Image uploaded and saved successfully.",
        data: updated,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteImage:async(req:Request,res:Response)=>{
    const foodItemId=req.params.foodItemId
    const deleted = await FoodItemImageService.deleteImage(foodItemId)
    return res.json({message:"Image deleted",data:deleted})
  }
};
