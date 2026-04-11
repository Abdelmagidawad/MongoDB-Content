// ✍️ Part 5 => $lookup (Joins)

// 1. Join orders with users to display the user name
// 2. Join orders with products to display the product name
// 3. Perform a full join (users + orders + products)

// *** Solve Part 5 ***

=> db.orders.aggregate([
    {$lookup:{
        from:"users",
        localField:"userId",
        foreignField:"_id",
        as:"user"
    }},
    {$match:{user:{$ne:[]}}}])

[
  {
    _id: 3,
    userId: 2,
    productId: 3,
    quantity: 1,
    total: 200,
    date: ISODate('2024-03-01T00:00:00.000Z'),
    user: [ { _id: 2, name: 'Sara', age: 28, city: 'Alex' } ]
  },
  {
    _id: 4,
    userId: 3,
    productId: 1,
    quantity: 1,
    total: 1000,
    date: ISODate('2024-03-10T00:00:00.000Z'),
    user: [ { _id: 3, name: 'Omar', age: 36, city: 'Cairo' } ]
  }
]

=> db.orders.aggregate([
    {$lookup:{
        from:"products",
        localField:"productId",
        foreignField:"_id",
        as:"product"
    }
}])

[
  {
    _id: 1,
    userId: 1,
    productId: 1,
    quantity: 1,
    total: 1000,
    date: ISODate('2024-01-10T00:00:00.000Z'),
    product: [ { _id: 1, name: 'Laptop', price: 1000, category: 'Tech' } ]
  },
  {
    _id: 2,
    userId: 1,
    productId: 2,
    quantity: 2,
    total: 1000,
    date: ISODate('2024-02-15T00:00:00.000Z'),
    product: [ { _id: 2, name: 'Phone', price: 500, category: 'Tech' } ]
  },
  {
    _id: 3,
    userId: 2,
    productId: 3,
    quantity: 1,
    total: 200,
    date: ISODate('2024-03-01T00:00:00.000Z'),
    product: [ { _id: 3, name: 'Shoes', price: 200, category: 'Fashion' } ]
  },
  {
    _id: 4,
    userId: 3,
    productId: 1,
    quantity: 1,
    total: 1000,
    date: ISODate('2024-03-10T00:00:00.000Z'),
    product: [ { _id: 1, name: 'Laptop', price: 1000, category: 'Tech' } ]
  }
]

=> db.orders.aggregate([
    {$lookup:{
        from:"users",
        localField:"userId",
        foreignField:"_id",
        as:"user"
    }},
    {$lookup:{
        from:"products",
        localField:"productId",
        foreignField:"_id",
        as:"product"
    }}
])

[
  {
    _id: 1,
    userId: 1,
    productId: 1,
    quantity: 1,
    total: 1000,
    date: ISODate('2024-01-10T00:00:00.000Z'),
    user: [],
    product: [ { _id: 1, name: 'Laptop', price: 1000, category: 'Tech' } ]
  },
  {
    _id: 2,
    userId: 1,
    productId: 2,
    quantity: 2,
    total: 1000,
    date: ISODate('2024-02-15T00:00:00.000Z'),
    user: [],
    product: [ { _id: 2, name: 'Phone', price: 500, category: 'Tech' } ]
  },
  {
    _id: 3,
    userId: 2,
    productId: 3,
    quantity: 1,
    total: 200,
    date: ISODate('2024-03-01T00:00:00.000Z'),
    user: [ { _id: 2, name: 'Sara', age: 28, city: 'Alex' } ],
    product: [ { _id: 3, name: 'Shoes', price: 200, category: 'Fashion' } ]
  },
  {
    _id: 4,
    userId: 3,
    productId: 1,
    quantity: 1,
    total: 1000,
    date: ISODate('2024-03-10T00:00:00.000Z'),
    user: [ { _id: 3, name: 'Omar', age: 36, city: 'Cairo' } ],
    product: [ { _id: 1, name: 'Laptop', price: 1000, category: 'Tech' } ]
  }
]
