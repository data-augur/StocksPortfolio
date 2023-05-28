/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sector` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Sector` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Sector` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Sector_name_key` ON `Sector`(`name`);
