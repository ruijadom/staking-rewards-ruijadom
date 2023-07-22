-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" TEXT NOT NULL,
    "rewardRate" TEXT NOT NULL,
    "annualReward" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Staking" ("annualReward", "id", "price", "rewardRate") SELECT "annualReward", "id", "price", "rewardRate" FROM "Staking";
DROP TABLE "Staking";
ALTER TABLE "new_Staking" RENAME TO "Staking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
