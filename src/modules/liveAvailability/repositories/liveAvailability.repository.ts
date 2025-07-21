import prisma from "../../../config/prisma";

export const LiveAvailabilityRepository = {
  getLiveAvilabilityBySpotId: async (spotId: string) => {
    return await prisma.foodSpot.findUnique({
      where: { id: spotId },
      select: {
        id: true,
        name: true,
        isOpen: true,
        foodItems: {
          select: {
            id: true,
            name: true,
            isAvailable: true,
          },
        },
      },
    });
  },
};
