/*
  Warnings:

  - Added the required column `researchId` to the `JobOffer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "JobSearch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "parameters" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "JobSearch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "contractType" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "dailyIncome" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "jobUrl" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "publicationDate" DATETIME NOT NULL,
    "researchId" TEXT NOT NULL,
    CONSTRAINT "JobOffer_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "JobSearch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_JobOffer" ("annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "jobUrl", "location", "publicationDate", "source", "title") SELECT "annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "jobUrl", "location", "publicationDate", "source", "title" FROM "JobOffer";
DROP TABLE "JobOffer";
ALTER TABLE "new_JobOffer" RENAME TO "JobOffer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
