/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `JobSearch` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobSearch_userId_title_key" ON "JobSearch"("userId", "title");
