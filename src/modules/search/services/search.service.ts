import { SearchFoodItemRepository, SearchFoodSpotRepository } from "../repositories/search.repository"

export const SearchFoodSpotServices={
    search:async(query:string)=>{
        return await SearchFoodSpotRepository.search(query)
    }
}
export const SearchFoodItemService={
    search:async(query:string)=>{
        return await SearchFoodItemRepository.search(query)
    }
}