// ✍️ Task 3,4,5 => Grouping Basics

// ✍️ Task 3

// Calculate: total revenue (sum of all orders)
// 👉 Use:
// $group
// $sum

//  *-* Solve Task 3 *-*

=> db.orders.aggregate([{$group:{_id:"orders",totalRevenue:{$sum:{$multiply:["$price","$quantity"]}}}}])

// output
[ { _id: 'orders', totalRevenue: 2750 } ]


// ✍️ Task 4 

// Get:
// total number of orders per user
// 👉 Group by: userId

//  *-* Solve Task 4 *-*

=> db.orders.aggregate([{$group:{_id:"$userId",totalOrders:{$sum:1}}}])

// output
 [
  { _id: 3, totalOrders: 1 },
  { _id: 1, totalOrders: 2 },
  { _id: 2, totalOrders: 1 },
  { _id: 4, totalOrders: 1 }
]


// ✍️ Task 5 

// Calculate:  average order price
// 👉 Use: $avg

//  *-* Solve Task 5 *-*

=> db.orders.aggregate([{$group:{_id:"$product",averagePrice:{$avg:"$price"}}}])

// output
[
  { _id: 'Monitor', averagePrice: 300 },
  { _id: 'Keyboard', averagePrice: 150 },
  { _id: 'Laptop', averagePrice: 1100 },
  { _id: 'Mouse', averagePrice: 50 }
]

// OR

=> db.orders.aggregate([{$group:{_id:"$product",averagePrice:{$avg:{$multiply:["$price","$quantity"]}}}}])

// output
[
  { _id: 'Monitor', averagePrice: 300 },
  { _id: 'Keyboard', averagePrice: 150 },
  { _id: 'Laptop', averagePrice: 1100 },
  { _id: 'Mouse', averagePrice: 100 }
] 
