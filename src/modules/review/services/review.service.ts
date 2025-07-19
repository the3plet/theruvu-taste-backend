import { ReviewInput } from "../dto/review.dto";
import { ReviewRepository } from "../repositories/review.repository";
import { updateAverageRating } from "../utils/updateAverageRating";

export const ReviewService = {
  getAll: async () => {
    const reviews = await ReviewRepository.getAll();
    return reviews;
  },
  create: async (data: ReviewInput, userId: string) => {
    const review = await ReviewRepository.create(data, userId);
    await updateAverageRating(data.foodSpotId);
    return review;
  },
  update: async (
    reviewId: string,
    userId: string,
    data: Partial<ReviewInput>
  ) => {
    const existing = await ReviewRepository.findById(reviewId);
    if (!existing || existing.userId !== userId)
      throw new Error("Unauthorized");
    const updated = await ReviewRepository.update(reviewId, userId, data);
    await updateAverageRating(existing.foodSpotId);
    return updated;
  },
  delete: async (reviewId: string, userId: string) => {
    const existing = await ReviewRepository.findById(reviewId);
    if (!existing || existing.userId !== userId)
      throw new Error("Unauthorized");
    const deleted = await ReviewRepository.delete(reviewId);
    await updateAverageRating(existing.foodSpotId);
    return { deleted, foodSpotId: existing.foodSpotId };
  },
  getByFoodspot: async (foodSpotId: string) => {
    return await ReviewRepository.getByFoodspot(foodSpotId);
  },
};
