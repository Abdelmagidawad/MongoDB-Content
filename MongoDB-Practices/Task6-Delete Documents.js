// ✍️ Task 6 => Delete Documents

// 1.Delete users whose age is less than 23
// 2.Delete all users who are not active
// 3.Drop the orders collection

//  *-* Solve Task 6 *-*

=> db.users.deleteMany({age:{$lt:23}})
=> db.users.find()

=> db.users.updateOne({},{$set:{isActive:false}})
=> db.users.findOne()
=> db.users.deleteMany({isActive:false})
=>db.users.find()

=> db.orders.drop()
=> show collections
