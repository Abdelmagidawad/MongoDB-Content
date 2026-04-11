// ✍️ Part 2 => Basic Queries

// 1. Retrieve all users who live in Cairo
// 2. Find users whose age is greater than 25
// 3. Sort users by age in descending order
// 4. Retrieve only the first 2 users

// *** Solve Part 2 ***

=>  db.users.find({city:"Cairo"})

[
  { _id: 1, name: 'Ali', age: 22, city: 'Cairo' },
  { _id: 3, name: 'Omar', age: 35, city: 'Cairo' }
]

=> db.users.find({age:{$gt:25}})

[
  { _id: 2, name: 'Sara', age: 28, city: 'Alex' },
  { _id: 3, name: 'Omar', age: 35, city: 'Cairo' }
]

=> db.users.find().sort({age:-1})

[
  { _id: 3, name: 'Omar', age: 35, city: 'Cairo' },
  { _id: 2, name: 'Sara', age: 28, city: 'Alex' },
  { _id: 1, name: 'Ali', age: 22, city: 'Cairo' }
]

=> db.users.find().sort({age:-1}).limit(2)

[
  { _id: 3, name: 'Omar', age: 35, city: 'Cairo' },
  { _id: 2, name: 'Sara', age: 28, city: 'Alex' }
]
