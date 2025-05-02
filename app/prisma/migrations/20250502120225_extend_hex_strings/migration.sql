-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "tokenAddress" SET DATA TYPE CHAR(42);

-- AlterTable
ALTER TABLE "Investment" ALTER COLUMN "hash" SET DATA TYPE CHAR(66);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "address" SET DATA TYPE CHAR(42);
