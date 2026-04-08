// ✍️ Task 2 => Projection

// Return:
// product
// totalPrice = price * quantity

// 👉 Use:
// $project
// $multiply

//  *-* Solve Task 2 *-*

=> db.orders.aggregate([{$project:{product:1,totalPrice:{$multiply:["$price","$quantity"]},_id:0}}])

// output
[
  { product: 'Laptop', totalPrice: 1000 },
  { product: 'Mouse', totalPrice: 100 },
  { product: 'Keyboard', totalPrice: 150 },
  { product: 'Monitor', totalPrice: 300 },
  { product: 'Laptop', totalPrice: 1200 }
]
