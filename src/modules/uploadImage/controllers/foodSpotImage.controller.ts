import { Request, Response } from "express";
import { FoodSpotImageService } from "../services/foodSpotImage.service";

export const FoodSpotImageController = {
  updateImage: async (req: Request, res: Response) => {
    try {
      const file = req.file;
      const foodSpotId = req.params.foodSpotId;
      if (!file) return res.status(400).json({ error: "No image uploaded." });

      if (!foodSpotId)
        return res.status(400).json({ error: "Missing FoodSpot ID." });

      const imagePublicId = file.filename;
      const imageUrl = (file as any).path;
      const updated = await FoodSpotImageService.updateImage(foodSpotId, imageUrl,imagePublicId);
      return res.status(200).json({
        message: "Image uploaded and saved successfully.",
        data: updated,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteImage:async(req:Request,res:Response)=>{
    const foodSpotId = req.params.foodSpotId;
    const deleted = await FoodSpotImageService.deleteImage(foodSpotId)
    return res.json({message:"Image Deleted",data:deleted})
  }
};
