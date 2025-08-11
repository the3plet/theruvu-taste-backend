import { z } from "zod";

export const foodItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be a positive number"),
  description:z.string().nonempty('Desciption is required'),
  foodSpotId: z.string().uuid("Invalid FoodSpot ID"),
});

export const updateFoodItemSchema = foodItemSchema.partial();

export type FoodItemInput = z.infer<typeof foodItemSchema>;
export type UpdateFoodItemInput = z.infer<typeof updateFoodItemSchema>;
