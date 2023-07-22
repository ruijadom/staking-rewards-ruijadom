/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Staking` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "DataItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expression" TEXT NOT NULL,
    "className" TEXT,
    "stakingId" TEXT,
    CONSTRAINT "DataItem_stakingId_fkey" FOREIGN KEY ("stakingId") REFERENCES "Staking" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" TEXT NOT NULL,
    "rewardRate" TEXT NOT NULL,
    "annualReward" TEXT NOT NULL
);
INSERT INTO "new_Staking" ("annualReward", "id", "price", "rewardRate") SELECT "annualReward", "id", "price", "rewardRate" FROM "Staking";
DROP TABLE "Staking";
ALTER TABLE "new_Staking" RENAME TO "Staking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
