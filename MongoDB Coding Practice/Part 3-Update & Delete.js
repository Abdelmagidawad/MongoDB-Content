// ✍️ Part 3 => Update & Delete

// 1. Increment age by 1 for all users in Cairo
// 2. Update the city to "Giza" for the user named Ali
// 3. Delete all users whose age is less than 25

// *** Solve Part 3 ***

=>  db.users.updateMany({city:"Cairo"},{$inc:{age:1}})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

=>  db.users.find({city:"Cairo"})

[
  { _id: 1, name: 'Ali', age: 23, city: 'Cairo' },
  { _id: 3, name: 'Omar', age: 36, city: 'Cairo' }
]

=> db.users.updateOne({name:"Ali"},{$set:{city:"Giza"}})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

=>  db.users.find({name:"Ali"})

[ { _id: 1, name: 'Ali', age: 23, city: 'Giza' } ]

=> db.users.deleteMany({age:{$lt:25}})

{ acknowledged: true, deletedCount: 1 }

=> db.users.find()

[
  { _id: 2, name: 'Sara', age: 28, city: 'Alex' },
  { _id: 3, name: 'Omar', age: 36, city: 'Cairo' }
]
