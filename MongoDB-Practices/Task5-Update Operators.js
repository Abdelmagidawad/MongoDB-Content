// ✍️ Task 5 => Update Operators

// Use the appropriate update operators:
// 1.$inc
// 2.$set
// 3.$unset
// 4.$push
// 5.$each 
// 6.$pop 
// 7.$pull 
// 8.$ 
// (Each operator should be used in its correct scenario)

//  *-* Solve Task 5 *-*

=> db.users.findOne()

=> db.users.updateOne({},{$inc:{balance:200}})
=> db.users.findOne()

=> db.users.updateOne({},{$set:{age:30}})
=> db.users.findOne()

=> db.users.find({isActive:false})
=> db.users.find({isActive:false},{"isActive.$":1,name:1,_id:0})
=> db.users.updateMany({isActive:false},{$unset:{isActive:5}})
=> db.users.find({isActive:{$exists:false}},{name:1,_id:0})

=> db.users.updateOne({},{$push:{skills:"Express.js"}})
=> db.users.findOne()

=> db.users.updateOne({name:"Sara"},{$push:{skills:{$each:["HTML","CSS","JS"]}}})
=> db.users.findOne({name:"Sara"})

=> db.users.updateOne({name:"Sara"},{$pop:{skills:1}})
=> db.users.findOne({name:"Sara"})
=> db.users.updateOne({name:"Mona"},{$pop:{skills:-1}})
=> db.users.findOne({name:"Mona"})

=> db.users.updateMany({},{$pull:{skills:{$in:["Express.js","MongoDB"]}}})
=> db.users.find()

=> db.users.updateOne({skills:"Node"},{$set:{"skills.$":"React"}})
=> db.users.findOne()
