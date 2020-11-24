# Migration `20201124231457-init`

This migration has been generated at 11/24/2020, 6:14:57 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Recipe" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "cookId" INTEGER,

    PRIMARY KEY ("id")
)

CREATE TABLE "Cook" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Cook.email_unique" ON "Cook"("email")

ALTER TABLE "Recipe" ADD FOREIGN KEY("cookId")REFERENCES "Cook"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201124231457-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Recipe{
+  id Int @id @default(autoincrement())
+  title String
+  cook Cook?   @relation(fields: [cookId], references: [id])
+  cookId  Int?
+}
+
+model Cook {
+  id  Int @id @default(autoincrement())
+  name  String
+  email String  @unique
+  recipes Recipe[]
+}
```


