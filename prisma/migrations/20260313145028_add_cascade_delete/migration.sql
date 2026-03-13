-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ReviewSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "questionId" TEXT NOT NULL,
    "nextReviewAt" DATETIME NOT NULL,
    "interval" INTEGER NOT NULL DEFAULT 1,
    "easeFactor" REAL NOT NULL DEFAULT 2.5,
    "repetitions" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ReviewSchedule_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ReviewSchedule" ("easeFactor", "id", "interval", "nextReviewAt", "questionId", "repetitions") SELECT "easeFactor", "id", "interval", "nextReviewAt", "questionId", "repetitions" FROM "ReviewSchedule";
DROP TABLE "ReviewSchedule";
ALTER TABLE "new_ReviewSchedule" RENAME TO "ReviewSchedule";
CREATE UNIQUE INDEX "ReviewSchedule_questionId_key" ON "ReviewSchedule"("questionId");
CREATE INDEX "ReviewSchedule_nextReviewAt_idx" ON "ReviewSchedule"("nextReviewAt");
CREATE TABLE "new_UserAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "questionId" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "answeredAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserAnswer" ("answeredAt", "id", "isCorrect", "questionId") SELECT "answeredAt", "id", "isCorrect", "questionId" FROM "UserAnswer";
DROP TABLE "UserAnswer";
ALTER TABLE "new_UserAnswer" RENAME TO "UserAnswer";
CREATE INDEX "UserAnswer_questionId_idx" ON "UserAnswer"("questionId");
CREATE INDEX "UserAnswer_answeredAt_idx" ON "UserAnswer"("answeredAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
