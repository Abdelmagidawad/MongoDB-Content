// ✍️ Task 2 => Find & Filtering

// Write queries to do the following

// 1.Retrieve all users
// 2.Retrieve users whose city is "Cairo"
// 3.Retrieve users whose age is greater than 25
// 4.Retrieve users whose balance is between 1000 and 3000
// 5.Retrieve users who have the skill "Node"
// 6.Retrieve users who are not active

//  *-* Solve Task 2 *-*

=> db.users.find()

=> db.users.find({city:"Cairo"})

=> db.users.find({age:{$gt:25}})

=> db.users.find({$and:[{balance:{$gte:1000}},{balance:{$lte:3000}}]})

=> db.users.find({skills:"Node"})

=> db.users.find({isActive:{$ne:true}})
