/*
  Warnings:

  - Added the required column `author_id` to the `Criticism` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Criticism" ADD COLUMN     "author_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Criticism" ADD CONSTRAINT "Criticism_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
