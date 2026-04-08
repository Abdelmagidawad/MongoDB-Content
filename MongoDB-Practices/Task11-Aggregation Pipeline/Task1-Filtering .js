// ✍️ Task 1 => Filtering 

// Retrieve all orders where: price > 100

// 👉 Use:  $match

//  *-* Solve Task 1 *-*

=> db.orders.aggregate([{$match:{price:{$gt:100}}}])

// output
[
  {
    _id: ObjectId('69d57c1d621e290c341e2621'),
    userId: 1,
    product: 'Laptop',
    price: 1000,
    quantity: 1,
    createdAt: ISODate('2024-01-10T00:00:00.000Z')
  },
  {
    _id: ObjectId('69d57c1d621e290c341e2623'),
    userId: 2,
    product: 'Keyboard',
    price: 150,
    quantity: 1,
    createdAt: ISODate('2024-01-15T00:00:00.000Z')
  }, ............
]
