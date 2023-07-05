/*
  Warnings:

  - You are about to drop the column `x` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `positionX` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionY` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL
);
INSERT INTO "new_Plant" ("id") SELECT "id" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
