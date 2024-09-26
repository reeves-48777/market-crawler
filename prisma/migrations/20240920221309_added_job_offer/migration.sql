-- CreateTable
CREATE TABLE "JobOffer" (
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
    "publicationDate" DATETIME NOT NULL
);
