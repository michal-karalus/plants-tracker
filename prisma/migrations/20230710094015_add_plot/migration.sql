/*
  Warnings:

  - Added the required column `plotId` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Plot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "plotId" INTEGER NOT NULL,
    CONSTRAINT "Plant_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("id", "positionX", "positionY") SELECT "id", "positionX", "positionY" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
