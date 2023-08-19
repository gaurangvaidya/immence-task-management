/*
  Warnings:

  - You are about to drop the column `uuid` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `tasks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "categories_uuid_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "uuid";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "uuid";
