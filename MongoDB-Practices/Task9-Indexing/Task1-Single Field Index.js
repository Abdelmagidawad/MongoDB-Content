// ✍️ Task 1 => Single Field Index

// 1. Create an index on the email field
// 2. Run the following query:
 // db.users.find({ email: "ahmed@gmail.com" })

 // 3. Use:
 // .explain("executionStats")

// and compare performance before and after creating the index

// 👉 Goal: Understand performance impact, not just syntax

//  *-* Solve Task 1 *-*

=> db.users.find({email:"ahmed@gmail.com"},{email:1})

// output
[
  {
    _id: ObjectId('69cc31b12274927a081e2621'),
    email: 'ahmed@gmail.com'
  }
]

=>  db.users.find({email:"ahmed@gmail.com"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'COLLSCAN',
//       filter: { email: { '$eq': 'ahmed@gmail.com' } },
// },
// executionStats: {
//     executionTimeMillis: 219,
//     totalDocsExamined: 4,
// }

=> db.users.createIndex({email:1})

// output
// email_1

=> db.users.find({email:"ahmed@gmail.com"},{email:1})

// output
[                                               
  {                                             
    _id: ObjectId('69cc31b12274927a081e2621'),  
    email: 'ahmed@gmail.com'                    
  }                                             
]                                               

=> db.users.find({email:"ahmed@gmail.com"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
//       filter: { email: { '$eq': 'ahmed@gmail.com' } },
// },
// executionStats: {
//      executionTimeMillis: 0,
    // totalDocsExamined: 1,
// }

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { email: 1 }, name: 'email_1' }
]
