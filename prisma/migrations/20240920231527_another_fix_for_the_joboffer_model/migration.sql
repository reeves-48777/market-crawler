/*
  Warnings:

  - You are about to alter the column `duration` on the `JobOffer` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "contractType" TEXT,
    "company" TEXT,
    "location" TEXT,
    "dailyIncome" TEXT,
    "annualIncome" TEXT,
    "currency" TEXT,
    "duration" INTEGER,
    "publicationDate" DATETIME,
    "researchId" TEXT NOT NULL,
    CONSTRAINT "JobOffer_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "JobSearch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_JobOffer" ("annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "location", "publicationDate", "researchId", "title") SELECT "annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "location", "publicationDate", "researchId", "title" FROM "JobOffer";
DROP TABLE "JobOffer";
ALTER TABLE "new_JobOffer" RENAME TO "JobOffer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
