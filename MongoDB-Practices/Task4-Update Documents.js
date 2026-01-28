// ✍️ Task 4 => Update Documents

// 1.Update the user named "Ahmed" and set: age = 26
// 2.Increase "Omar"’s balance by 500
// 3.Add the skill "MongoDB" to "Mona"’s skills
// 4.Set isActive = false for all users in "Cairo"
// 5.Remove the city field from the user named "Sara"

//  *-* Solve Task 4 *-*

=> db.users.find({name:"Ahmed"})
=> db.users.updateOne({name:"Ahmed"},{$set:{age:26}})
=> db.users.find({name:"Ahmed"})

=> db.users.find({name:"Omar"})
=> db.users.updateOne({name:"Omar"},{$inc:{balance:500}})
=> db.users.find({name:"Omar"})

=> db.users.findOne({name:"Mona"})
=> db.users.updateOne({name:"Mona"},{$push:{skills:"MongoDB"}})
=> db.users.findOne({name:"Mona"})

=> db.users.find({city:"Cairo"})
=> db.users.updateMany({city:"Cairo"},{$set:{isActive:false}})
=> db.users.find({city:"Cairo"})

=> db.users.updateOne({name:"Sara"},{$unset:{city:2}})
=> db.users.find({city:{$exists:false}})
