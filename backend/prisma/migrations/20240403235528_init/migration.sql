-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(55) NOT NULL,
    "email" VARCHAR(55) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
