import prisma from "../../../config/prisma";

export const updateAverageRating = async (foodSpotId: string) => {
  const result = await prisma.review.aggregate({
    where: { foodSpotId },
    _avg: {
      rating: true,
    },
  });
  await prisma.foodSpot.update({
    where: { id: foodSpotId },
    data: { averageRating: result._avg.rating || 0 },
  });
};
