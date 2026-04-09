// ✍️ Task 9 => Add Fields

// Add a new field:
// totalPrice = price * quantity

// 👉 Use: $addFields

//  *-* Solve Task 9 *-*

=> db.orders.aggregate([{$addFields:{totalPrice:{$multiply:["$price","$quantity"]}}},{$limit:2}])

// output
[
  {
    _id: ObjectId('69d57c1d621e290c341e2621'),
    userId: 1,
    product: 'Laptop',
    price: 1000,
    quantity: 1,
    createdAt: ISODate('2024-01-10T00:00:00.000Z'),
    totalPrice: 1000
  },
  {
    _id: ObjectId('69d57c1d621e290c341e2622'),
    userId: 1,
    product: 'Mouse',
    price: 50,
    quantity: 2,
    createdAt: ISODate('2024-02-10T00:00:00.000Z'),
    totalPrice: 100
  }
]
