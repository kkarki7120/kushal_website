-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "type" TEXT DEFAULT 'blog';

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "fk_project_category" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
