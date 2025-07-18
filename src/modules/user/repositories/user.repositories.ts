
import prisma from "../../../config/prisma";
import { User } from "@prisma/client";


export const UserRepository={
    findByEmail:(email:string):Promise<User|null>=>{
      return  prisma.user.findUnique({where:{email}})
    },
    create:(data:Omit<User,'id'| 'createdAt' | 'updatedAt' | 'reviews'>)=>{
      return  prisma.user.create({data})
    }
}