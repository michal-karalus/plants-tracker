-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "plotId" INTEGER NOT NULL,
    CONSTRAINT "Plant_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("id", "plotId", "positionX", "positionY") SELECT "id", "plotId", "positionX", "positionY" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
