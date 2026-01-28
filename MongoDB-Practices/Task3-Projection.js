// ✍️ Task 3 => Projection

// 1.Retrieve only name and city
// 2.Retrieve all fields except balance
// 3.Retrieve name and skills without _id

//  *-* Solve Task 3 *-*

=> db.users.find({},{name:1,city:1})
=> db.users.find({},{name:1,city:1,_id:0})

=> db.users.find({},{balance:0})

=> db.users.find({},{name:1,skills:1,_id:0})
