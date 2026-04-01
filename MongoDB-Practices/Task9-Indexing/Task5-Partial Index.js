// ✍️ Task 5 => Partial Index

// 1. Create an index only for documents where:  
// isActive: true
// 2. Run: db.users.find({ isActive: true })

// 👉 Question: What is the difference between a partial index and a normal index?

//  *-* Solve Task 5 *-*

=> db.users.find({isActive:true},{name:1,isActive:1})

// output
[
  {
    _id: ObjectId('69cc31b12274927a081e2621'),
    name: 'Ahmed',
    isActive: true
  },
  {
    _id: ObjectId('69cc31b12274927a081e2623'),
    name: 'Omar',
    isActive: true
  },
  {
    _id: ObjectId('69cc31b12274927a081e2624'),
    name: 'Mona',
    isActive: true
  }
]

=> db.users.find({isActive:true}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'COLLSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 0,
//     totalDocsExamined: 7,
// }

=> db.users.createIndex({isActive:1},{partialFilterExpresion:{isActive:true}})

// output
// isActive_1

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
  { v: 2, key: { phone: 1 }, name: 'phone_1', sparse: true },
  { v: 2, key: { isActive: 1 }, name: 'isActive_1' }
]

=>  db.users.find({ isActive: true },{name:1,isActive:1})

// output
[
  {
    _id: ObjectId('69cc31b12274927a081e2621'),
    name: 'Ahmed',
    isActive: true
  },
  {
    _id: ObjectId('69cc31b12274927a081e2623'),
    name: 'Omar',
    isActive: true
  },
  {
    _id: ObjectId('69cc31b12274927a081e2624'),
    name: 'Mona',
    isActive: true
  }
]

=> db.users.find({ isActive: true }).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 3,
//     totalDocsExamined: 3,
// }

// Answer => partial index: create a index to documents with match condition , normal index: create a index to all documents
