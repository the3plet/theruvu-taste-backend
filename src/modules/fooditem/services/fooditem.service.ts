import { FoodItemInput, UpdateFoodItemInput } from "../dto/fooditem.dto";
import { FoodItemRepository } from "../repositories/fooditem.repository";

//  const item = await prisma.foodItem.findUnique({ where: { id } });
//     if (!item) throw new Error("Food Item not Found");

export const FoodItemService = {
  getByFoodSpot: async (foodSpotId: string) => {
    return await FoodItemRepository.getByFoodspot(foodSpotId);
  },
  getById: async (id: string) => {
    return await FoodItemRepository.getById(id);
  },
  create: async (data: FoodItemInput, userId: string) => {
    const owner = await FoodItemRepository.findFoodSpotOwnerBySpotId(
      data.foodSpotId
    );
    if (!owner || owner.ownerId !== userId)
      throw new Error("Unauthorized or FoodSpot not found");
    return await FoodItemRepository.create(data);
  },
  update: async (id: string, data: UpdateFoodItemInput, userId: string) => {
    const item = await FoodItemRepository.getById(id);
    if (!item) throw new Error("FoodItem not found");
    const owner = await FoodItemRepository.findFoodSpotOwnerBySpotId(
      item.foodSpotId
    );
    if (!owner || owner.ownerId !== userId) {
      throw new Error("Unauthorized");
    }
    return await FoodItemRepository.update(id, data);
  },
  delete: async (id: string, userId: string) => {
    const item = await FoodItemRepository.getById(id);
    if (!item) throw new Error("FoodItem not found");
    const owner = await FoodItemRepository.findFoodSpotOwner(id);
    if (!owner || owner.foodSpot.ownerId !== userId) {
      throw new Error("Unauthorized");
    }
    return await FoodItemRepository.delete(id);
  },
  toggleAvilability: async (id: string, userId: string) => {
    const item = await FoodItemRepository.getById(id);
    if (!item) throw new Error("FoodItem not found");

    const owner = await FoodItemRepository.findFoodSpotOwnerBySpotId(
      item.foodSpotId
    );
    if (!owner || owner.ownerId !== userId) {
      throw new Error("Unauthorized");
    }
    return await FoodItemRepository.toggleAvilability(id, !item.isAvailable);
  },
};
