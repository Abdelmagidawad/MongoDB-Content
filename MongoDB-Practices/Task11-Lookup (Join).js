// ✍️ Task 11 => Lookup (Join)

// 👉 Join  : users with orders
// 👉 Result: Each user with their corresponding orders
// 👉 Use   : $lookup

//  *-* Solve Task 11 *-*

=> db.users.aggregate([
  {$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }},
  {$limit:1}
])

// output
[
  {
    _id: 1,
    name: 'Ahmed',
    age: 25,
    city: 'Cairo',
    userOrders: [
      {
        _id: ObjectId('69d57c1d621e290c341e2621'),
        userId: 1,
        product: 'Laptop',
        price: 1000,
        quantity: 1,
        createdAt: ISODate('2024-01-10T00:00:00.000Z')
      },
      {
        _id: ObjectId('69d57c1d621e290c341e2622'),
        userId: 1,
        product: 'Mouse',
        price: 50,
        quantity: 2,
        createdAt: ISODate('2024-02-10T00:00:00.000Z')
      }
    ]
  }
]
