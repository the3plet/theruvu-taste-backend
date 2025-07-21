import { deleteImageFromCloudinary } from "../../../utils/cloudinary";
import { FoodSpotImageRepository } from "../repositories/foodSpotImage.repository";

export const FoodSpotImageService = {
  updateImage: async (
    foodSpotId: string,
    imageUrl: string,
    imagePublicId: string
  ) => {
    const foodSpot = await FoodSpotImageRepository.findImageById(foodSpotId);
    if (!foodSpot) throw new Error("FoodSpot not found");

    // If existing image, delete old one from cloudinary
    if (foodSpot.imagePublicId) {
      await deleteImageFromCloudinary(foodSpot.imagePublicId);
    }

    return await FoodSpotImageRepository.updateImageUrl(
      foodSpotId,
      imageUrl,
      imagePublicId
    );
  },
  deleteImage: async (foodSpotId: string) => {
    const foodSpot = await FoodSpotImageRepository.findImageById(foodSpotId);
    if (!foodSpot || !foodSpot.imagePublicId)
      throw new Error("Image not found");

    await deleteImageFromCloudinary(foodSpot.imagePublicId);
    return await FoodSpotImageRepository.deleteImage(foodSpotId);
  },
};
