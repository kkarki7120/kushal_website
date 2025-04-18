/*
  Warnings:

  - The `image` column on the `awards` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `image` column on the `posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[slug]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "awards" ADD COLUMN     "type" VARCHAR DEFAULT 'Additional',
DROP COLUMN "image",
ADD COLUMN     "image" JSONB;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "featured" BOOLEAN DEFAULT false,
DROP COLUMN "image",
ADD COLUMN     "image" JSONB;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "smtp_settings" (
    "id" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "fromEmail" TEXT NOT NULL,
    "fromName" TEXT NOT NULL,
    "encryption" TEXT NOT NULL DEFAULT 'tls',
    "enableAuth" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastTested" TIMESTAMPTZ(6),

    CONSTRAINT "smtp_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_logs" (
    "id" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "error" TEXT,
    "sentAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "templateId" TEXT,

    CONSTRAINT "email_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_smtp_settings_isActive" ON "smtp_settings"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "email_templates_name_key" ON "email_templates"("name");

-- CreateIndex
CREATE INDEX "idx_email_logs_sentAt" ON "email_logs"("sentAt");

-- CreateIndex
CREATE INDEX "idx_email_logs_status" ON "email_logs"("status");

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");
