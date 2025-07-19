import prisma from "../../../config/prisma";
import { ReviewInput } from "../dto/review.dto";

export const ReviewRepository = {
  getAll: async () => {
    return await prisma.review.findMany();
  },
  create: async (data: ReviewInput, userId: string) => {
    return await prisma.review.create({
      data: {
        userId,
        foodSpotId: data.foodSpotId,
        rating: data.rating,
        comment: data.comment,
      },
    });
  },
  update: async (
    reviewId: string,
    userId: string,
    data: Partial<ReviewInput>
  ) => {
    return await prisma.review.update({
      where: { id: reviewId },
      data,
    });
  },
  delete: async (reviewId: string) => {
    return await prisma.review.delete({
      where: { id: reviewId },
    });
  },
  findById: async (reviewId: string) => {
    return await prisma.review.findUnique({
      where: { id: reviewId },
    });
  },
  getByFoodspot: async (foodSpotId: string) => {
    return await prisma.review.findMany({
      where: { foodSpotId },
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
  },
};
