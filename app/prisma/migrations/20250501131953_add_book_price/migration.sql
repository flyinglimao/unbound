/*
  Warnings:

  - Added the required column `price` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "price" DECIMAL(9,2) NOT NULL;
