import prisma from "../../../config/prisma"

export const SearchFoodSpotRepository={
    search:async(query:string)=>{
        return await prisma.foodSpot.findMany({
            where:{
                OR:[
                    {name:{contains:query,mode:"insensitive"}},
                    {location:{contains:query,mode:"insensitive"}},
                    {type:{contains:query,mode:"insensitive"}}
                ]
            }
        })
    }
}

export const SearchFoodItemRepository={
    search:async(query:string)=>{
        return await prisma.foodItem.findMany({
            where:{
                name:{contains:query,mode:"insensitive"},
            
            },include:{foodSpot:true}
        })
    }
}