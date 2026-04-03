// ✍️ Task 9 => Challenge

// You are building a system where:

//  Users log in using email
//  A dashboard filters users by:
//   city
//   isActive
//   age range

// 👉 Design the optimal indexes for this system

// (No single correct answer — focus on reasoning)

//  *-* Solve Task 9 *-*

=> db.users.createIndex({email:1},{unique:true})

// output
// email_1

=> db.users.find({email:"abdelmagidCairo@gmail.com"})

// output
[
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

=>  db.users.insertOne({name:"Ali",email:"abdelmagidCairo@gmail.com"})

// output
// MongoServerError: E11000 duplicate key error collection: indexPracticeDB.users index: email_1 dup key: { email: "abdelmagidCairo@gmail.com" }

=> db.users.find({email:"abdelmagidCairo@gmail.com"}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'EXPRESS_IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 1,
//     totalDocsExamined: 1,
// }

=> db.users.createIndex({city:1,isActive:1,age:1})

// output
// city_1_isActive_1_age_1
=> db.users.updateOne({name:"Mahmoud"},{$set:{age:32,isActive:true}})
=> db.users.updateOne({name:"Abdelmagid"},{$set:{isActive:true}})
=> db.users.updateOne({name:"Sara"},{$set:{isActive:false}})

=> db.users.find({city:"Cairo",isActive:true,age:{$gt:25}})

// output
[
  {
    _id: ObjectId('69cc437a2274927a081e262e'),
    name: 'Mahmoud',
    age: 32,
    city: 'Cairo',
    phone: '0115963',
    email: 'mahmoudCairo@gmail.com',
    tags: [ 'react', 'sass', 'vuejs' ],
    isActive: true
  }
]

=> db.users.find({city:"Cairo",isActive:true,age:{$gt:25}}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 1,
//     totalDocsExamined: 1,
// }

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { phone: 1 }, name: 'phone_1', sparse: true },
  { v: 2, key: { isActive: 1 }, name: 'isActive_1' },
  {
    v: 2,
    key: { createdAt: 1 },
    name: 'createdAt_1',
    expireAfterSeconds: 10
  },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
  {
    v: 2,
    key: { city: 1, isActive: 1, age: 1 },
    name: 'city_1_isActive_1_age_1'
  }
]
