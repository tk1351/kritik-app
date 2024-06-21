/*
  Warnings:

  - Added the required column `title` to the `Criticism` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Criticism" ADD COLUMN     "title" TEXT NOT NULL;
