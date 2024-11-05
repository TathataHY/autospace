/*
  Warnings:

  - The values [EMAIL] on the enum `AuthProviderType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthProviderType_new" AS ENUM ('CREDENTIALS', 'GOOGLE');
ALTER TABLE "AuthProvider" ALTER COLUMN "type" TYPE "AuthProviderType_new" USING ("type"::text::"AuthProviderType_new");
ALTER TYPE "AuthProviderType" RENAME TO "AuthProviderType_old";
ALTER TYPE "AuthProviderType_new" RENAME TO "AuthProviderType";
DROP TYPE "AuthProviderType_old";
COMMIT;
