// ✍️ Task 11 => Challenge

// You have a JSON file containing users. You want to:

// Import the data
// If a user already exists → update it
// If not → insert it

// 👉 Question:

// What is this operation called?
// Which option should you use?

//  *-* Solve Task 11 *-*

=> mongoimport --db backupPracticeDB --collection users --file users.json --mode upsert --upsertFields name

// output
// 2026-04-05T22:41:07.644+0200    connected to: mongodb://localhost/
// 2026-04-05T22:41:07.863+0200    Failed: bulk write exception: write errors: [Plan executor error during update :: caused by :: After applying the update, the (immutable) field '_id' was found to have been altered to _id: ObjectId('69d27680325d941cac1e2621')]
// 2026-04-05T22:41:07.863+0200    0 document(s) imported successfully. 1 document(s) failed to import.


// Operation called => upsert 
