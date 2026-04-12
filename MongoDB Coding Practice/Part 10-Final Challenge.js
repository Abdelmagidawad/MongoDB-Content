// ✍️ Part 10 => Final Challenge

// Retrieve users who:
    // Have placed orders
   // Their total spending is greater than 1000
  // Sorted by total spending in descending order

// *** Solve Part 10 ***

=>  db.users.insertOne({ _id: 1, name: 'Ali', age: 23, city: 'Cairo' })
// { acknowledged: true, insertedId: 1 }

=> db.users.insertOne({ _id: 4, name: 'Ali', age: 23, city: 'Cairo' })
// { acknowledged: true, insertedId: 4 }

=> db.users.find()
[
  { _id: 2, name: 'Sara', age: 28, city: 'Alex' },
  { _id: 3, name: 'Omar', age: 36, city: 'Cairo' },
  { _id: 1, name: 'Ali', age: 23, city: 'Cairo' },
  { _id: 4, name: 'Ali', age: 23, city: 'Cairo' }
]

=> db.users.aggregate([{
  $lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"userId",
    as:"orders"
  }
},
{$match:{orders:{$ne:[]}}},
{$unwind:"$orders"},
{$group:{_id:"$name",totalSales:{$sum:"$orders.total"}}},
{$match:{totalSales:{$gt:1000}}},
{$sort:{totalSales:-1}}
])

// output
[ { _id: 'Ali', totalSales: 2000 } ]


// OR 

=> db.orders.aggregate([
  {
    $group:{_id:"$userId",totalSales:{$sum:"$total"}}
  },
  {$match:{totalSales:{$gt:1000}}},
  {$sort:{totalSales:-1}}
])

// output
[ { _id: 1, totalSales: 2000 } ]
