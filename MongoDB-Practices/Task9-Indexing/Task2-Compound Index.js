// ✍️ Task 2 => Compound Index

// 1. Create a compound index on: city + age

// 2. Test the following queries:

//  Query A:
//   db.users.find({ city: "Cairo", age: { $gt: 20 } })
//  Query B:
//   db.users.find({ age: 25 })

// 👉 Question: Why might Query B not efficiently use the index? 

//  *-* Solve Task 2 *-*

=> db.users.createIndex({city:1,age:1})

// output
// city_1_age_1

=> db.users.find({city:"Cairo",age:{$gt:20}},{name:1,age:1,city:1})

// output
[
  {
    _id: ObjectId('69cc31b12274927a081e2623'),
    name: 'Omar',
    age: 22,
    city: 'Cairo'
  },
  {
    _id: ObjectId('69cc31b12274927a081e2621'),
    name: 'Ahmed',
    age: 25,
    city: 'Cairo'
  }
]

=> db.users.find({city:"Cairo",age:{$gt:20}}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 2,
//     totalDocsExamined: 2,
// }


=> db.users.find({city:"Cairo"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 2,
//     totalDocsExamined: 2,
// }

=> db.users.find({age:25}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'COLLSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 0,
//     totalDocsExamined: 4,
// }

// Answer => Important Order Compound index
