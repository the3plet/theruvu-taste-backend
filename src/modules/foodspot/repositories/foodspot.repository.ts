import prisma from "../../../config/prisma";
import { FoodspotInput,FoodspotUpdateInput } from "../../../types/foodspot.types";

export const FoodspotRepository = {
  create: async (data: FoodspotInput,ownerId:string) => {
    return await prisma.foodSpot.create({ data:{...data,owner:{connect:{id:ownerId}}} });
  },
  getAll: async () => {
    return await prisma.foodSpot.findMany();
  },
  getById: async (id: string) => {
    return await prisma.foodSpot.findUnique({ where: { id } });
  },
  update: async (id: string, data:FoodspotUpdateInput) => {
    return await prisma.foodSpot.update({ where: { id}, data });
  },
  delete: async (id: string) => {
    return await prisma.foodSpot.delete({ where: { id } });
  },
  findByIdAndOwner:async(id:string,ownerId:string)=>{
    return await prisma.foodSpot.findFirst({where:{id,ownerId}})
  }
};
