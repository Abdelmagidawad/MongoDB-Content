// ✍️ Task 6 => TTL Index (Time To Live)

// 1. Create a TTL index on createdAt with: 
// expireAfterSeconds: 10

// 2. Insert a new document and wait

// 👉 Question: Why are TTL indexes useful in real-world applications?

//  *-* Solve Task 6 *-*

=> db.users.createIndex({createdAt:1},{expireAfterSeconds:10})

// output
// createdAt_1

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
// After 10 seconds

=>  db.users.find()

// output
[
  {
    _id: ObjectId('69cc3ed52274927a081e2626'),
    name: 'Sara',
    age: 29,
    city: 'Giza',
    phone: '0125963',
    email: 'SaraGiza@gmail.com'
  },
  {
    _id: ObjectId('69cc437a2274927a081e262d'),
    name: 'Abdelmagid',
    age: 25,
    city: 'Cairo',
    phone: '01015293',
    email: 'abdelmagidCairo@gmail.com'
  },
  {
    _id: ObjectId('69cc437a2274927a081e262e'),
    name: 'Mahmoud',
    age: 25,
    city: 'Cairo',
    phone: '0115963',
    email: 'mahmoudCairo@gmail.com'
  }
]

=> db.users.insertOne({name:"Saed",age:25,city:"Elsharqia",email:"saed@gmail.com",createdAt:new Date()})

=> db.users.find({name:"Saed"})
// output
[
  {
    _id: ObjectId('69cd347b58876de1861e2622'),
    name: 'Saed',
    age: 25,
    city: 'Elsharqia',
    email: 'saed@gmail.com',
    createdAt: ISODate('2026-04-01T15:06:35.447Z')
  }
]
// After 10 Seconds 

=>  db.users.find({name:"Saed"})

// Answer => Because to MongoDB to delete document after specific time automatically 
// => Like Session Data

