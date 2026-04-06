// ✍️ Task 6 => mongorestore

// 1. Drop the entire database
// 2. Restore it from the dump

//  *-* Solve Task 6 *-*

=> mongorestore --db backupPracticeDB dump/backupPracticeDB --drop

// output
// 2026-04-05T21:36:41.305+0200    The --db and --collection flags are deprecated for this use-case; please use --nsInclude instead, i.e. with --nsInclude=${DATABASE}.${COLLECTION}
// 2026-04-05T21:36:41.307+0200    building a list of collections to restore from dump\backupPracticeDB dir
// 2026-04-05T21:36:41.308+0200    don't know what to do with file "dump\backupPracticeDB\prelude.json", skipping...
// 2026-04-05T21:36:41.309+0200    reading metadata for backupPracticeDB.orders from dump\backupPracticeDB\orders.metadata.json
// 2026-04-05T21:36:41.310+0200    reading metadata for backupPracticeDB.users from dump\backupPracticeDB\users.metadata.json
// 2026-04-05T21:36:41.312+0200    dropping collection backupPracticeDB.users before restoring 
