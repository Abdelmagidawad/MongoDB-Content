// ✍️ Task 7 => Find Methods

// 1.Retrieve only the first user
// 2.Sort users by age in descending order
// 3.Retrieve only 2 users
// 4.Apply pagination:
//  skip 1
//  limit 2

//  *-* Solve Task 7 *-*

=> db.users.findOne()

=> db.users.find().sort({age:-1})

=> db.users.find().limit(2)

=> db.users.find().limit(2).skip(1)
