-- CreateTable
CREATE TABLE "cagtegories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "cagtegories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cagtegories_uuid_key" ON "cagtegories"("uuid");
