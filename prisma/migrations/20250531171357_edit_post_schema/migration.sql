-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "blogLink" TEXT,
ALTER COLUMN "content" DROP NOT NULL;
