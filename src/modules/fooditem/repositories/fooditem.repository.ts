import prisma from "../../../config/prisma";
import { FoodItemInput, UpdateFoodItemInput } from "../dto/fooditem.dto";

export const FoodItemRepository = {
  getByFoodspot: async (foodSpotId: string) => {
    return await prisma.foodItem.findMany({
      where: { foodSpotId: foodSpotId },
    });
  },
  getById: async (id: string) => {
    return await prisma.foodItem.findUnique({ where: { id } });
  },
  findFoodSpotOwner: async (foodItemId: string) => {
    return await prisma.foodItem.findUnique({
      where: { id: foodItemId },
      select: { foodSpot: { select: { ownerId: true } } },
    });
  },
  findFoodSpotOwnerBySpotId: async (foodSpotId: string) => {
    return await prisma.foodSpot.findUnique({
      where: { id: foodSpotId },
      select: { ownerId: true },
    });
  },
  create: async (data: FoodItemInput) => {
    return await prisma.foodItem.create({ data });
  },
  update: async (id: string, data: UpdateFoodItemInput) => {
    return await prisma.foodItem.update({ where: { id }, data });
  },
  delete: async (id: string) => {
    return await prisma.foodItem.delete({ where: { id } });
  },
  toggleAvilability: async (id: string,isAvailable:boolean) => {
    return await prisma.foodItem.update({
      where: { id },
      data: { isAvailable },
    });
  },
};
