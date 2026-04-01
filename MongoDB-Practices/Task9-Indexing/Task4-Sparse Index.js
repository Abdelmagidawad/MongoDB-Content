// ✍️ Task 4 => Sparse Index

// 1. Insert some users without a phone field
// 2. Create a sparse index on phone
// 3. Run: db.users.find({ phone: { $exists: true } })

// 👉 Question:  Why is a sparse index useful in this case?

//  *-* Solve Task 4 *-*

=> db.users.insertMany([
  {name:"Sara",age:29,city:"Giza",phone:"0125963",email: 'SaraGiza@gmail.com'},
  {name:"Abdelmagid",age:25,city:"Cairo",phone:"01015293",email:"abdelmagidCairo@gmail.com"},
  {name:"Mahmoud", age:25,city:"Cairo",phone:"0115963",email:"mahmoudCairo@gmail.com"}
])

=>  db.users.createIndex({phone:1})

// output
// phone_1

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
  { v: 2, key: { phone: 1 }, name: 'phone_1' }
]

=>  db.users.find({phone:{$exists:true}},{name:1,phone:1})

// output
[
  {
    _id: ObjectId('69cc437a2274927a081e262d'),
    name: 'Abdelmagid',
    phone: '01015293',
  },
  {
    _id: ObjectId('69cc437a2274927a081e262e'),
    name: 'Mahmoud',
    phone: '0115963',
  },
  {
    _id: ObjectId('69cc3ed52274927a081e2626'),
    name: 'Sara',
    phone: '0125963',
  }
]

=>  db.users.find({phone:{$exists:true}}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 7,
//     totalDocsExamined: 7,
// }

=> db.users.dropIndex({phone:1})

// output
// { nIndexesWas: 4, ok: 1 }

=> db.users.getIndexes()

// output
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true }
]

=> db.users.createIndex({phone:1},{sparse:true})

// output
// phone_1

=> db.users.find({ phone: { $exists: true } },{name:1,phone:1})

// output
[
  {
    _id: ObjectId('69cc437a2274927a081e262d'),
    name: 'Abdelmagid',
    phone: '01015293'
  },
  {
    _id: ObjectId('69cc437a2274927a081e262e'),
    name: 'Mahmoud',
    phone: '0115963'
  },
  {
    _id: ObjectId('69cc3ed52274927a081e2626'),
    name: 'Sara',
    phone: '0125963'
  }
]

=> db.users.find({phone:{$exists:true}}).explain("executionStats")

// output
// winningPlan: {
//       stage: 'IXSCAN',
// },
// executionStats: {
//  executionTimeMillis: 0,
//     totalKeysExamined: 3,
//     totalDocsExamined: 3,
// }

// Answer => Because Create a index on this documents that have a phone field only
