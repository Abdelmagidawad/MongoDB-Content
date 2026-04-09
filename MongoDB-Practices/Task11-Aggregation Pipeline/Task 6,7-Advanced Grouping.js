// ✍️ Task 6,7 => Advanced Grouping

// ✍️ Task 6

// For each product, calculate:
// total sales
// maximum price
// minimum price

// 👉 Use:
// $group
// $sum
// $max
// $min

//  *-* Solve Task 6 *-*

=> db.orders.aggregate([{$group:{_id:"$product",totalSales:{$sum:{$multiply:["$price","$quantity"]}},maxPrice:{$max:"$price"},minPrice:{$min:"$price"}}}])

// output
[
  { _id: 'Keyboard', totalSales: 150, maxPrice: 150, minPrice: 150 },
  { _id: 'Laptop', totalSales: 2200, maxPrice: 1200, minPrice: 1000 },
  { _id: 'Mouse', totalSales: 100, maxPrice: 50, minPrice: 50 },
  { _id: 'Monitor', totalSales: 300, maxPrice: 300, minPrice: 300 }
]


// ✍️ Task 7 

// Get: list of products per user
// 👉 Use: $push

//  *-* Solve Task 7 *-*

=> db.orders.aggregate([{$group:{_id:"$userId",products:{$push:"$product"}}},{$sort:{_id:1}}])

// output
[
  { _id: 1, products: [ 'Laptop', 'Mouse' ] },
  { _id: 2, products: [ 'Keyboard' ] },
  { _id: 3, products: [ 'Monitor' ] },
  { _id: 4, products: [ 'Laptop' ] }
]
