// ✍️ Task 8 => Debugging & Analysis

// 1. List all indexes: db.users.getIndexes()
// 2. Drop a specific index

// 3. Use: .explain()

// 👉 Observe:
          //  COLLSCAN
          //  IXSCAN

// 👉 Goal: Understand when MongoDB chooses to use an index

//  *-* Solve Task 8 *-*

=>  db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
  { v: 2, key: { phone: 1 }, name: 'phone_1', sparse: true },
  { v: 2, key: { isActive: 1 }, name: 'isActive_1' },
  {
    v: 2,
    key: { createdAt: 1 },
    name: 'createdAt_1',
    expireAfterSeconds: 10
  },
  { v: 2, key: { tags: 1 }, name: 'tags_1' }
]

=> db.users.find({tags:"node"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 2,
//     totalDocsExamined: 2,
// }

=> db.users.dropIndex({tags:1})

// output
// { nIndexesWas: 7, ok: 1 }

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
  { v: 2, key: { phone: 1 }, name: 'phone_1', sparse: true },
  { v: 2, key: { isActive: 1 }, name: 'isActive_1' },
  {
    v: 2,
    key: { createdAt: 1 },
    name: 'createdAt_1',
    expireAfterSeconds: 10
  }
]

=> db.users.find({tags:"node"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'COLLSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 0,
//     totalDocsExamined: 3,
// }


