=> db.ordersChat.insertMany([
 { _id: 1, customer: "Ali", product: "Laptop", price: 1000, quantity: 2, status: "completed" },
 { _id: 2, customer: "Sara", product: "Mouse", price: 50, quantity: 5, status: "completed" },
 { _id: 3, customer: "Ali", product: "Keyboard", price: 100, quantity: 1, status: "pending" },
 { _id: 4, customer: "Sara", product: "Laptop", price: 1000, quantity: 1, status: "completed" }
])

=> db.ordersChat.find()

=> db.ordersChat.aggregate([{$match:{status:"completed"}},{$limit:2}])

// output
[
  {
    _id: 1,
    customer: 'Ali',
    product: 'Laptop',
    price: 1000,
    quantity: 2,
    status: 'completed'
  },
  {
    _id: 2,
    customer: 'Sara',
    product: 'Mouse',
    price: 50,
    quantity: 5,
    status: 'completed'
  }
]

=> db.ordersChat.aggregate([{$group:{_id:"$customer",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}}])

// output
[ { _id: 'Ali', totalPrice: 2100 }, { _id: 'Sara', totalPrice: 1250 } ]

=> db.ordersChat.aggregate([{$group:{_id:"$customer",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}},{$project:{customer:"$_id",totalPrice:1,_id:0}}])

// output
[                                           
  { totalPrice: 2100, customer: 'Ali' },    
  { totalPrice: 1250, customer: 'Sara' }    
]                                           

=> db.ordersChat.aggregate([{$group:{_id:"$customer",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}},{$project:{customer:"$_id",totalPrice:1,_id:0}},{$sort:{totalPrice:-1}}])

// output
[
  { totalPrice: 2100, customer: 'Ali' },
  { totalPrice: 1250, customer: 'Sara' }
]

=> db.ordersChat.aggregate([{$group:{_id:"$customer",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}},{$project:{customer:"$_id",totalPrice:1,_id:0}},{$sort:{totalPrice:-1}},{$limit:1}])

// output
[
  { totalPrice: 2100, customer: 'Ali' },
]

=> db.ordersChat.aggregate([
  {$match:{status:"completed"}},
  {$group:{_id:"$customer",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}},
  {$sort:{totalPrice:-1}},
  {$limit:1},
  {$project:{_id:0,customer:"$_id",totalPrice:1}}
])

// output
[ { totalPrice: 2000, customer: 'Ali' } ]

=> db.ordersChat.aggregate([{$group:{_id:"$customer",avgPrice:{$avg:"$price"},maxPrice:{$max:"$price"}}}])

// output
[
  { _id: 'Sara', avgPrice: 525, maxPrice: 1000 },
  { _id: 'Ali', avgPrice: 550, maxPrice: 1000 }
]
