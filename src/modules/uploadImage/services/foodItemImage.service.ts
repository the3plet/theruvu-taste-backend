import { deleteImageFromCloudinary } from "../../../utils/cloudinary";
import { FoodItemImageRepository } from "../repositories/foodItemImage.repository";

export const FoodItemImageService = {
  updateImage: async (
    foodItemId: string,
    imageUrl: string,
    imagePublicId: string
  ) => {
    const foodItem = await FoodItemImageRepository.findImageById(foodItemId);
    if (!foodItem) throw new Error("FoodItem not found");

    if (foodItem.imagePublicId) {
      await deleteImageFromCloudinary(foodItem.imagePublicId);
    }

    return await FoodItemImageRepository.updateImageUrl(foodItemId, imageUrl,imagePublicId);
  },
  deleteImage:async(foodItemId:string)=>{
        const foodItem = await FoodItemImageRepository.findImageById(foodItemId);
    if (!foodItem || !foodItem.imagePublicId) throw new Error("Image not found");

    await deleteImageFromCloudinary(foodItem.imagePublicId)
    return await FoodItemImageRepository.deleteImage(foodItemId)
  }
};
