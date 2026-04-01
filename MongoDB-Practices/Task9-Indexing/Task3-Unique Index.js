// ✍️ Task 3 => Unique Index

// 1. Create a unique index on email

// 2. try inserting:
//   db.users.insertOne({ name: "Test", email: "ahmed@gmail.com" })

// 👉 Question: Why does this operation fail? 


//  *-* Solve Task 3 *-*

=> db.users.createIndex({email:1},{unque:true})

// output
// email_1

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { email: 1 }, name: 'email_1' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' }
]

=> db.users.dropIndex({email:1})

// output
// { nIndexesWas: 3, ok: 1 }

=> db.users.createIndex({email:1},{unique:true})

// output
// email_1

=>  db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true }
]

=> db.users.insertOne({ name: "Test", email: "ahmed@gmail.com" })

// output
// MongoServerError: E11000 duplicate key error collection: indexPracticeDB.users index: email_1 dup key: { email: "ahmed@gmail.com" }

// Answer => Because field email a unique index
