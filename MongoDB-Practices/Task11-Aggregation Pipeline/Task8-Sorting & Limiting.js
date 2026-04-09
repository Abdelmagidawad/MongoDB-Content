// ✍️ Task 8 => Sorting & Limiting

// Retrieve: top 2 most expensive orders
// 👉 Use:
// $sort
// $limit

//  *-* Solve Task 8 *-*

=> db.orders.aggregate([{$sort:{price:-1}},{$limit:2}])

// output
[
  {
    _id: ObjectId('69d57c1d621e290c341e2625'),
    userId: 4,
    product: 'Laptop',
    price: 1200,
    quantity: 1,
    createdAt: ISODate('2024-02-20T00:00:00.000Z')
  },
  {
    _id: ObjectId('69d57c1d621e290c341e2621'),
    userId: 1,
    product: 'Laptop',
    price: 1000,
    quantity: 1,
    createdAt: ISODate('2024-01-10T00:00:00.000Z')
  }
]

// OR 

=> db.orders.aggregate([{$group:{_id:"$product",maxPrice:{$max:"$price"}}},{$sort:{maxPrice:-1}},{$limit:2}])

// output
[
  { _id: 'Laptop', maxPrice: 1200 },
  { _id: 'Monitor', maxPrice: 300 }
]
