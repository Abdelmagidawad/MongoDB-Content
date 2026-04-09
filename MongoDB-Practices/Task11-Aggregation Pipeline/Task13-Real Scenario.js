// ✍️ Task 13 => Real Scenario

// Get:
// total spending per user
// include the user name
// 👉 Use:
// $lookup
// $group

//  *-* Solve Task 13 *-*

=> db.users.aggregate([
  {$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"orders"
  }},{$unwind:"$orders"},
  {$group:{_id:"$name",totalSpending:{$sum:{$multiply:["$orders.price","$orders.quantity"]}}}}
])

// output
[
  { _id: 'Mona', totalSpending: 1200 },
  { _id: 'Sara', totalSpending: 150 },
  { _id: 'Ahmed', totalSpending: 1100 },
  { _id: 'Omar', totalSpending: 300 }
]
