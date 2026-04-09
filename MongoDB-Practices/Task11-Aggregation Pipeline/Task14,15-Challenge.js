// ✍️ Task 14,15 => Challenge


// ✍️ Task 14 => 

// Retrieve: top 3 users by total spending
// include:  name ,total spending
// 👉 Use:
// $lookup
// $group
// $sort
// $limit

//  *-* Solve Task 14 *-*

=> db.users.aggregate([
  {$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"orders"
  }},{$unwind:"$orders"},
  {$group:{_id:"$name",totalSpending:{$sum:{$multiply:["$orders.price","$orders.quantity"]}}}},
  {$sort:{totalSpending:-1}},
  {$limit:3}
])

// output
[
  { _id: 'Mona', totalSpending: 1200 },
  { _id: 'Ahmed', totalSpending: 1100 },
  { _id: 'Omar', totalSpending: 300 }
]

// OR 

=> db.users.aggregate([
  {$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"orders"
  }},{$unwind:"$orders"},
  {$group:{_id:"$name",totalSpending:{$sum:{$multiply:["$orders.price","$orders.quantity"]}}}},
  {$project:{_id:0,name:"$_id",totalSpending:1}},
  {$sort:{totalSpending:-1}},
  {$limit:3}
])

// output
[
  { totalSpending: 1200, name: 'Mona' },
  { totalSpending: 1100, name: 'Ahmed' },
  { totalSpending: 300, name: 'Omar' }
]


// ✍️ Task 15 => 

// Calculate:
// total revenue per month
// sorted in descending order
// 👉 Use:
// $group
// $dateToString
// $sort

//  *-* Solve Task 15 *-*

=> db.orders.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m",date:"$createdAt"}},totalRevenue:{$sum:{$multiply:["$price","$quantity"]}}}},{$sort:{totalRevenue:-1}}])

// output
[
  { _id: '2024.02', totalRevenue: 1300 },
  { _id: '2024.01', totalRevenue: 1150 },
  { _id: '2024.03', totalRevenue: 300 }
]
