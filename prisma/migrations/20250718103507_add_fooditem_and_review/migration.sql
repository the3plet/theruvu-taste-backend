/*
  Warnings:

  - You are about to drop the column `availableNow` on the `FoodSpot` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `FoodSpot` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `FoodSpot` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `FoodSpot` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FoodSpot" DROP COLUMN "availableNow",
DROP COLUMN "hours",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'No description provided';

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FoodItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "foodSpotId" TEXT NOT NULL,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FoodItem" ADD CONSTRAINT "FoodItem_foodSpotId_fkey" FOREIGN KEY ("foodSpotId") REFERENCES "FoodSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
