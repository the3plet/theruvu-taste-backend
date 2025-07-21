import prisma from "../../../config/prisma";

export const FoodSpotImageRepository = {
  updateImageUrl: async (id: string, imageUrl: string,imagePublicId:string) => {
    return await prisma.foodSpot.update({
      where: { id },
      data: { imageUrl,imagePublicId},
    });
  },
  findImageById: async (foodSpotId: string) => {
    return prisma.foodSpot.findUnique({
      where: { id: foodSpotId },
    });
  },
  deleteImage:async(id:string)=>{
    return prisma.foodSpot.update({where:{id},data:{imageUrl:null,imagePublicId:null}})
  }
};
