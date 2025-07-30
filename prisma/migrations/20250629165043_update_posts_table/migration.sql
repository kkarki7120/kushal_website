/*
  Warnings:

  - You are about to drop the column `blogLink` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `excerpt` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `posts` table. All the data in the column will be lost.
  - Made the column `published` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "blogLink",
DROP COLUMN "excerpt",
DROP COLUMN "featured",
DROP COLUMN "image",
DROP COLUMN "type",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "externalUrl" TEXT,
ADD COLUMN     "focusKeyword" TEXT,
ADD COLUMN     "isExternal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seoData" JSONB,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "published" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
