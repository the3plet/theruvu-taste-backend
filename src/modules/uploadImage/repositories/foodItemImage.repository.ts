import prisma from "../../../config/prisma"

export const FoodItemImageRepository={
    updateImageUrl:async(id:string,imageUrl:string,imagePublicId:string)=>{
        return await prisma.foodItem.update({
            where:{id},
            data:{imageUrl,imagePublicId}
        })
    },
    findImageById:async(foodItemId:string)=>{
        return prisma.foodItem.findUnique({
            where:{id:foodItemId}
        })
    },
    deleteImage:async(id:string)=>{
        return prisma.foodItem.update({where:{id},data:{imageUrl:null,imagePublicId:null}})
    }
}