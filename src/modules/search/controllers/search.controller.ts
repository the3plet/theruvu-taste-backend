import { error } from "console";
import { Request, Response } from "express";
import { SearchFoodItemService, SearchFoodSpotServices } from "../services/search.service";

export const SearchFoodSpotController = {
  search: async (req: Request, res: Response) => {
    const { q } = req.query;
    if (typeof q !== "string" || !q.trim())
      return res.status(400).json({ error: "Invalid Query" });
    const results = await SearchFoodSpotServices.search(q);
    return res.json(results);
  },
};
export const SearchFoodItemController={
    search:async(req:Request,res:Response)=>{
        const {q}=req.query
        if(typeof q !=='string'|| !q.trim()) return res.status(400).json({error:"Invalid Query"})
            const results = await SearchFoodItemService.search(q)
        res.json(results)
    }
}
