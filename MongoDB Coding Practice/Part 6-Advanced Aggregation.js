// ✍️ Part 6 => Advanced Aggregation

// 1. Calculate total spending for each user
// 2. Find the user who spent the most money
// 3. Find the most sold product
// 4. Group by category and calculate total sales

// *** Solve Part 6 ***

=>  db.orders.aggregate([{$group:{_id:"$userId",totalSpending:{$sum:"$total"}}}])

[
  { _id: 3, totalSpending: 1000 },
  { _id: 1, totalSpending: 2000 },
  { _id: 2, totalSpending: 200 }
]

=>  db.orders.aggregate([{$group:{_id:"$userId",totals:{$sum:"$total"}}},{$sort:{totals:-1}},{$limit:1}])

[ { _id: 1, totals: 2000 } ]

=> db.orders.aggregate([
  {
    $group:{
      _id:"$productId",
      totalSold:{$sum:"$quantity"}
    }
  },
  {$sort:{totalSold:-1}}
  ,{$limit:1}
])

[ { _id: 1, totalSold: 2 } ]

=> db.orders.aggregate([
  {$lookup:{
    from:"products",
    localField:"productId",
    foreignField:"_id",
    as:"product"
  }},
  {$unwind:"$product"},
  {$group:{_id:"$product.category",totalSales:{$sum:"$total"}}}
])

[
  { _id: 'Fashion', totalSales: 200 },
  { _id: 'Tech', totalSales: 3000 }
]
