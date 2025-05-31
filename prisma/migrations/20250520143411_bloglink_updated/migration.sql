-- CreateTable
CREATE TABLE "blog_link_categories" (
    "blogLinkId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "blog_link_categories_pkey" PRIMARY KEY ("blogLinkId","categoryId")
);

-- CreateTable
CREATE TABLE "blog_links" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT,
    "image" JSONB,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'blog',
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "featured" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_links_slug_key" ON "blog_links"("slug");

-- AddForeignKey
ALTER TABLE "blog_link_categories" ADD CONSTRAINT "blog_link_categories_blogLinkId_fkey" FOREIGN KEY ("blogLinkId") REFERENCES "blog_links"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_link_categories" ADD CONSTRAINT "blog_link_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
