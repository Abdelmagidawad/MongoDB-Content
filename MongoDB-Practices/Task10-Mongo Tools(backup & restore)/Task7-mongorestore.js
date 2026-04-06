// ✍️ Task 7 => mongorestore

// 1. Restore only the users collection
// 2. Try restoring with:  --drop

// 👉 Question:
// What is the difference when using --drop?

//  *-* Solve Task 7 *-*

=> mongorestore --db backupPracticeDB Data/backupPracticeDB/users.bson

// output
// 2026-04-05T21:45:08.509+0200    checking for collection data in Data\backupPracticeDB\users.bson
// 2026-04-05T21:45:08.515+0200    reading metadata for backupPracticeDB.users from Data\backupPracticeDB\users.metadata.json
// 2026-04-05T21:45:08.536+0200    restoring to existing collection backupPracticeDB.users without dropping
// 2026-04-05T21:45:08.536+0200    restoring backupPracticeDB.users from Data\backupPracticeDB\users.bson

=> mongorestore --db backupPracticeDB Data/backupPracticeDB/users.bson  --drop

// output
// 2026-04-05T21:46:38.625+0200    checking for collection data in Data\backupPracticeDB\users.bson
// 2026-04-05T21:46:38.628+0200    reading metadata for backupPracticeDB.users from Data\backupPracticeDB\users.metadata.json
// 2026-04-05T21:46:38.629+0200    dropping collection backupPracticeDB.users before restoring


// Answer => Without use drop restore data collection and added to old data 
//          ,With use drop remove the old data collection and add new data collection to be stored.
