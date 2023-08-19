/*
  Warnings:

  - You are about to drop the `cagtegories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cagtegories";

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_uuid_key" ON "categories"("uuid");
