// ✍️ Task 3 => mongoimport

// 1. Drop the users collection

// 2. Restore it using the exported JSON file

//  *-* Solve Task 3 *-*

=> mongoimport --db backupPracticeDB --collection users --file users.json --drop

// output
// 2026-04-05T17:55:09.331+0200    connected to: mongodb://localhost/
// 2026-04-05T17:55:09.333+0200    dropping: backupPracticeDB.users
// 2026-04-05T17:55:09.535+0200    2 document(s) imported successfully. 0 document(s) failed to import.
