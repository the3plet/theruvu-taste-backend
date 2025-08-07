import prisma from "../../../config/prisma";

export const updateAverageRating = async (foodSpotId: string) => {
  const result = await prisma.review.aggregate({
    where: { foodSpotId },
    _avg: {
      rating: true,
    },
    _count:{rating:true}
  });
  await prisma.foodSpot.update({
    where: { id: foodSpotId },
    data: { averageRating: result._avg.rating || 0,
            totalReview: result._count.rating,
     },
  });
};
