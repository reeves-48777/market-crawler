-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "contractType" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "dailyIncome" TEXT,
    "annualIncome" TEXT,
    "currency" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "publicationDate" DATETIME NOT NULL,
    "researchId" TEXT NOT NULL,
    CONSTRAINT "JobOffer_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "JobSearch" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_JobOffer" ("annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "location", "publicationDate", "researchId", "title") SELECT "annualIncome", "company", "contractType", "currency", "dailyIncome", "duration", "id", "location", "publicationDate", "researchId", "title" FROM "JobOffer";
DROP TABLE "JobOffer";
ALTER TABLE "new_JobOffer" RENAME TO "JobOffer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
