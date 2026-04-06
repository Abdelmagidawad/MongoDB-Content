// ✍️ Task 5 => mongodump

// 1. Dump the entire database
// 2. Dump only the users collection
// 3. Dump users where: age > 25

// 👉 Hint: use --query

//  *-* Solve Task 5 *-*

=> mongodump --db backupPracticeDB

// output
// 2026-04-05T21:22:05.027+0200    writing backupPracticeDB.users to dump\backupPracticeDB\users.bson
// 2026-04-05T21:22:05.030+0200    writing backupPracticeDB.orders to dump\backupPracticeDB\orders.bson
// 2026-04-05T21:22:05.034+0200    done dumping backupPracticeDB.users (3 documents)
// 2026-04-05T21:22:05.042+0200    done dumping backupPracticeDB.orders (2 documents)

=> mongodump --db backupPracticeDB --collection users --out Data/

// output
// 2026-04-05T21:25:39.688+0200    writing backupPracticeDB.users to Data\backupPracticeDB\users.bson
// 2026-04-05T21:25:39.693+0200    done dumping backupPracticeDB.users (3 documents)

=> mongodump --db backupPracticeDB --collection users --query="{\"age\":\"{$gt:25}\"}" --out backup/

// output
// 2026-04-05T21:30:27.082+0200    writing backupPracticeDB.users to backup\backupPracticeDB\users.bson
// 2026-04-05T21:30:27.250+0200    done dumping backupPracticeDB.users (0 documents)
