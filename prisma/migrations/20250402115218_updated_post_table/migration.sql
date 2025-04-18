-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "fk_project_category";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "impact" TEXT;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
