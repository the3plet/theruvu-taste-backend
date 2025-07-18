import { Prisma } from "@prisma/client";

export type FoodspotInput = Omit<Prisma.FoodSpotCreateInput,"owner">
export type FoodspotUpdateInput= Omit<Prisma.FoodSpotUpdateInput,"owner">