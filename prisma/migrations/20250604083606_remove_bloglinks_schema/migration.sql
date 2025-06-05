/*
  Warnings:

  - You are about to drop the `blog_link_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `blog_links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "blog_link_categories" DROP CONSTRAINT "blog_link_categories_blogLinkId_fkey";

-- DropForeignKey
ALTER TABLE "blog_link_categories" DROP CONSTRAINT "blog_link_categories_categoryId_fkey";

-- DropTable
DROP TABLE "blog_link_categories";

-- DropTable
DROP TABLE "blog_links";
