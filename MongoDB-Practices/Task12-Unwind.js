// ✍️ Task 12 => Unwind

// After $lookup: Flatten the orders array
// 👉 Use: $unwind

//  *-* Solve Task 12 *-*

=> db.users.aggregate([
  {$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"usersOrders"
  }},
  {$limit:1},
  {$unwind:"$usersOrders"}
])

// output
[
  {
    _id: 1,
    name: 'Ahmed',
    age: 25,
    city: 'Cairo',
    usersOrders: {
      _id: ObjectId('69d57c1d621e290c341e2621'),
      userId: 1,
      product: 'Laptop',
      price: 1000,
      quantity: 1,
      createdAt: ISODate('2024-01-10T00:00:00.000Z')
    }
  },
  {
    _id: 1,
    name: 'Ahmed',
    age: 25,
    city: 'Cairo',
    usersOrders: {
      _id: ObjectId('69d57c1d621e290c341e2622'),
      userId: 1,
      product: 'Mouse',
      price: 50,
      quantity: 2,
      createdAt: ISODate('2024-02-10T00:00:00.000Z')
    }
  }
]
