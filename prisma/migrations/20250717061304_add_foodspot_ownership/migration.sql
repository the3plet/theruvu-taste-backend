/*
  Warnings:

  - Added the required column `ownerId` to the `FoodSpot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodSpot" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodSpot" ADD CONSTRAINT "FoodSpot_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
