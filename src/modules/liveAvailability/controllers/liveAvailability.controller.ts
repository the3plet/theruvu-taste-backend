import { Request, Response } from "express";
import { LiveAvailabilityService } from "../services/liveAvailability.service";

export const LiveAvailabilityController = {
  getAvilability: async (req: Request, res: Response) => {
    try {
      const foodSpotId = req.params.foodSpotId;
      const data = await LiveAvailabilityService.getLiveAvailability(
        foodSpotId
      );
      return res.status(200).json({ data });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },
};
