// ✍️ Task 7 => Multikey Index

// 1. Create an index on the tags field
// 2. Run: db.users.find({ tags: "node" })

// 👉 Question: Why does MongoDB automatically treat this as a multikey index?

//  *-* Solve Task 7 *-*

=> db.users.createIndex({tags:1})

// output
// tags_1

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

=> db.users.find({tags:"node"})

// output
[
  {
    _id: ObjectId('69cc3ed52274927a081e2626'),
    name: 'Sara',
    age: 29,
    city: 'Giza',
    phone: '0125963',
    email: 'SaraGiza@gmail.com',
    tags: [ 'js', 'node', 'mongoDB' ]
  },
  {
    _id: ObjectId('69cc437a2274927a081e262d'),
    name: 'Abdelmagid',
    age: 25,
    city: 'Cairo',
    phone: '01015293',
    email: 'abdelmagidCairo@gmail.com',
    tags: [ 'html', 'css', 'node' ]
  }
]

=> db.users.find({tags:"node"},{"tags.$":1})

// output
[
  { _id: ObjectId('69cc3ed52274927a081e2626'), tags: [ 'node' ] },
  { _id: ObjectId('69cc437a2274927a081e262d'), tags: [ 'node' ] }
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

=> db.users.find({tags:"mongoDB"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 1,
//     totalDocsExamined: 1,
// }

=> db.users.find({tags:"mongoDB"},{"tags.$":1})

// output
[ { _id: ObjectId('69cc3ed52274927a081e2626'), tags: [ 'mongoDB' ] } ]

// Answer => MongoDB Multikey Indexes automatically index array fields to speed up queries on individual elements within arrays, 
//          improving performance for datasets with nested or list-based values.
