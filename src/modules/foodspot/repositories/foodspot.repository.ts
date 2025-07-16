import prisma from "../../../config/prisma.js";
import { Prisma } from "@prisma/client";

export type FoodspotInput= Prisma.FoodSpotCreateInput
export type FoosspotUpdateInput= Prisma.FoodSpotUpdateInput

export const FoodspotRepository = {
  create: async (data:FoodspotInput) => {
    return await prisma.foodSpot.create({ data });
  },

  getAll: async () => {
    return await prisma.foodSpot.findMany();
  },

  getById:async (id:string)=>{
    return await prisma.foodSpot.findUnique({where:{id}})
  },
  update: async(id:string,data:FoosspotUpdateInput)=>{
    return await prisma.foodSpot.update({where:{id},data})
  },
  delete: async (id:string)=> {
    return await prisma.foodSpot.delete({where:{id}})
  }
}

