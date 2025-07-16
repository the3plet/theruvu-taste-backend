import { FoodspotRepository, FoodspotInput,FoosspotUpdateInput} from "../repositories/foodspot.repository.js";

export const FoodspotService = {
  createFoodspot: async (data:FoodspotInput) => {
    return await FoodspotRepository.create(data);
  },
  getAllFoodspot: async () => {
    return await FoodspotRepository.getAll();
  },
  getFoodspotByid: async (id:string) => {
    return await FoodspotRepository.getById(id);
  },
  updateFoodspot:async(id:string,data:FoosspotUpdateInput)=>{
    return await FoodspotRepository.update(id,data)
  },
  deleteFoodspot:async(id:string)=>{
    return await FoodspotRepository.delete(id)
  }
};
