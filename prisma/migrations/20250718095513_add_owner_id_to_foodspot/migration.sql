/*
  Warnings:

  - You are about to drop the column `userId` on the `FoodSpot` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `FoodSpot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoodSpot" DROP CONSTRAINT "FoodSpot_userId_fkey";

-- AlterTable
ALTER TABLE "FoodSpot" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodSpot" ADD CONSTRAINT "FoodSpot_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
