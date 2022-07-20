-- AlterTable
ALTER TABLE "order" ALTER COLUMN "table_number" DROP NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "order_to_product" ALTER COLUMN "product_id" DROP NOT NULL,
ALTER COLUMN "order_id" DROP NOT NULL;
