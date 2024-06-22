-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT
);

-- CreateTable
CREATE TABLE "Criticism" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "criticism_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "is_published" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "author_id" TEXT NOT NULL,
    CONSTRAINT "Criticism_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag_id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Like" (
    "user_id" TEXT NOT NULL,
    "criticism_id" TEXT NOT NULL,
    "assigned_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "criticism_id"),
    CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Like_criticism_id_fkey" FOREIGN KEY ("criticism_id") REFERENCES "Criticism" ("criticism_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CriticismToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CriticismToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Criticism" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CriticismToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Criticism_criticism_id_key" ON "Criticism"("criticism_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_tag_id_key" ON "Tag"("tag_id");

-- CreateIndex
CREATE UNIQUE INDEX "_CriticismToTag_AB_unique" ON "_CriticismToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CriticismToTag_B_index" ON "_CriticismToTag"("B");
