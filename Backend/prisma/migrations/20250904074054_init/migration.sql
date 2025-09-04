-- CreateTable
CREATE TABLE "public"."user" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://unsplash.com/photos/a-man-in-a-black-shirt-is-holding-his-head-SaVAOGxHgz8',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."userSolved" (
    "id" UUID NOT NULL,
    "easySolved" TEXT NOT NULL,
    "mediumSolved" TEXT NOT NULL,
    "hardSolved" TEXT NOT NULL,
    "UserId" UUID NOT NULL,

    CONSTRAINT "userSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "public"."user"("username");

-- AddForeignKey
ALTER TABLE "public"."userSolved" ADD CONSTRAINT "userSolved_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
