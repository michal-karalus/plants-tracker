/*
  Warnings:

  - The primary key for the `Plant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Plant` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "plotId" INTEGER NOT NULL,
    CONSTRAINT "Plant_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("id", "plotId", "positionX", "positionY") SELECT "id", "plotId", "positionX", "positionY" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
