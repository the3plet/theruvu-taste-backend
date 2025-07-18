import {
  FoodspotInput,
  FoodspotUpdateInput,
} from "../../../types/foodspot.types";
import { FoodspotRepository } from "../repositories/foodspot.repository";

export const FoodspotService = {
  createFoodspot: async (input: FoodspotInput, ownerId: string) => {
    return await FoodspotRepository.create(input, ownerId);
  },
  getAllFoodspot: async () => {
    return await FoodspotRepository.getAll();
  },
  getFoodspotByid: async (id: string) => {
    return await FoodspotRepository.getById(id);
  },
  updateFoodspot: async (
    id: string,
    data: FoodspotUpdateInput,
    ownerId: string
  ) => {
    const foodspot = await FoodspotRepository.findByIdAndOwner(id, ownerId);
    if (!foodspot) throw new Error("Unauthorized or not found");
    return await FoodspotRepository.update(id, data);
  },
  deleteFoodspot: async (id: string, ownerId: string) => {
    const foodspot = await FoodspotRepository.findByIdAndOwner(id, ownerId);
    if (!foodspot) throw new Error("Unauthorized or not found");
    return await FoodspotRepository.delete(id);
  },
};
