import { LiveAvailabilityRepository } from "../repositories/liveAvailability.repository";

export const LiveAvailabilityService = {
  getLiveAvailability: async (foodSpotId: string) => {
    const foodSpot =
      await LiveAvailabilityRepository.getLiveAvilabilityBySpotId(foodSpotId);
    if (!foodSpot) throw new Error("FoodSpot not found");
    return foodSpot;
  },
};
