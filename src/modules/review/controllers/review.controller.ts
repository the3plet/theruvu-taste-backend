import { Request, Response } from "express";
import { ReviewService } from "../services/review.service";
import { AuthenticatedRequest } from "../../../types/auth.types";
import { CreateReviewSchema, UpdateReviewSchema } from "../dto/review.dto";

export const ReviewController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const review = await ReviewService.getAll();
      res.json(review);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const userId = authReq.user?.userId;

      if (!userId) return res.status(401).json({ error: "Unauthorized" });

      const parse = CreateReviewSchema.safeParse(req.body);
      if (!parse.success) {
        return res
          .status(400)
          .json({ error: parse.error.flatten().fieldErrors });
      }

      const review = await ReviewService.create(parse.data, userId);
      res.status(201).json(review);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const userId = authReq.user?.userId;
      const { reviewId } = req.params;

      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const parse = UpdateReviewSchema.safeParse(req.body);
      if (!parse.success) {
        return res
          .status(400)
          .json({ error: parse.error.flatten().fieldErrors });
      }
      const updatedReview = await ReviewService.update(
        reviewId,
        userId,
        parse.data
      );
      res.json(updatedReview);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthenticatedRequest;
      const userId = authReq.user?.userId;
      const { reviewId } = req.params;

      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      await ReviewService.delete(reviewId, userId);
      res.status(204).json({ reviewId });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
  getByFoodspot: async (req: Request, res: Response) => {
    try {
      const { foodSpotId } = req.params;
      const reviews = await ReviewService.getByFoodspot(foodSpotId);
      res.json(reviews);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
