// src/modules/review/dto/review.dto.ts

import { z } from "zod";

// Zod schema for creating a review
export const CreateReviewSchema = z.object({
  foodSpotId: z.string().nonempty('FoodSpot ID is required'),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1, "Comment is required"),
});

// Zod schema for updating a review (partial)
export const UpdateReviewSchema = z.object({
  rating: z.number().min(1).max(5).optional(),
  comment: z.string().min(1).optional(),
});

// Types inferred from schemas
export type ReviewInput = z.infer<typeof CreateReviewSchema>;
export type ReviewUpdateInput = z.infer<typeof UpdateReviewSchema>;
