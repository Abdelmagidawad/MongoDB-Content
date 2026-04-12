// ✍️ Part 8 => Indexing & Performance

// 1. Create an index on age
// 2. Create a compound index on (city, age)
// 3. Use explain() to analyze query performance

// *** Solve Part 8 ***

=>  db.users.createIndex({age:1})
// age_1

=> db.users.createIndex({city:1,age:1})
// city_1_age_1

=> db.users.getIndexes()

[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { age: 1 }, name: 'age_1' },
  { v: 2, key: { city: 1, age: 1 }, name: 'city_1_age_1' }
]

=>  db.users.find({city:"Cairo",age:{$gt:25}})
[ { _id: 3, name: 'Omar', age: 36, city: 'Cairo' } ]

=> db.users.find({city:"Cairo",age:{$gt:25}}).explain("executionStats")

=> db.users.find({age:{$gt:30}})
[ { _id: 3, name: 'Omar', age: 36, city: 'Cairo' } ]

=>db.users.find({age:{$gt:30}}).explain("executionStats")
