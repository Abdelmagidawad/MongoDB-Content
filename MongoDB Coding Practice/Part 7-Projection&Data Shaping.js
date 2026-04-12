// ✍️ Part 7 => Projection & Data Shaping

// 1. Return only name and city from users
// 2. Format the order output as: {username: "...", productName: "...", total: ...}

// *** Solve Part 7 ***

=> db.users.aggregate([{$project:{name:1,city:1,_id:0}}])

[ { name: 'Sara', city: 'Alex' }, { name: 'Omar', city: 'Cairo' } ]

=> db.orders.aggregate([
  {$lookup:{
    from:"users",
    localField:"userId",
    foreignField:"_id",
    as:"user"
  }},
  {$unwind:"$user"},
  {$lookup:{
    from:"products",
    localField:"productId",
    foreignField:"_id",
    as:"product"
  }},
  {$unwind:"$product"},
  {$project:{username:"$user.name",productName:"$product.name",total:1,_id:0}},
])

[
  { total: 200, username: 'Sara', productName: 'Shoes' },
  { total: 1000, username: 'Omar', productName: 'Laptop' }
]
