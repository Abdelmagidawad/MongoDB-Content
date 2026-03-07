// => $addFields

=> db.sales.aggregate([{$addFields:{totalPrice:{$multiply:["$price","$quantity"]}}},{$limit:2}])

// output

[                                               
  {                                             
    _id: ObjectId('699f7be5ef555e07191e2621'),  
    item: 'abc',                                
    price: 10,                                  
    quantity: 5,                                
    date: ISODate('2016-12-16T22:00:00.000Z'),  
    size: [ 'S', 'M', 'L' ],                    
    totalPrice: 50                              
  },                                            
  {                                             
    _id: ObjectId('699f7be5ef555e07191e2622'),  
    item: 'abc',                                
    price: 10,                                  
    quantity: 2,                                
    date: ISODate('2017-04-16T22:00:00.000Z'),  
    size: [ 'S' ],                              
    totalPrice: 20                              
  }                                             
]                                               

=> db.sales.aggregate([{$addFields:{totalPrice:{$multiply:["$price","$quantity"]}}},{$group:{_id:"$item",sumTotalPrice:{$sum:"$totalPrice"}}}])

// output

[
  { _id: 'efg', sumTotalPrice: 78 },
  { _id: 'abc', sumTotalPrice: 70 },
  { _id: 'xzy', sumTotalPrice: 650 },
  { _id: 'fds', sumTotalPrice: 801 }
]

=>  db.sales.aggregate([{$group:{_id:"$item",totalPrice:{$sum:{$multiply:["$price","$quantity"]}}}}])

// output
[
  { _id: 'fds', totalPrice: 801 },
  { _id: 'efg', totalPrice: 78 },
  { _id: 'abc', totalPrice: 70 },
  { _id: 'xzy', totalPrice: 650 }
]

=> db.sales.aggregate([{$addFields:{sumPrice:{$multiply:["$price","$quantity"]}}},{$sort:{sumPrice:1}},{$limit:3}])

// output
[
  {
    _id: ObjectId('699f7be5ef555e07191e2622'),
    item: 'abc',
    price: 10,
    quantity: 2,
    date: ISODate('2017-04-16T22:00:00.000Z'),
    size: [ 'S' ],
    sumPrice: 20
  },
  {
    _id: ObjectId('699f7be5ef555e07191e2621'),
    item: 'abc',
    price: 10,
    quantity: 5,
    date: ISODate('2016-12-16T22:00:00.000Z'),
    size: [ 'S', 'M', 'L' ],
    sumPrice: 50
  },
  {
    _id: ObjectId('699f7be5ef555e07191e2623'),
    item: 'efg',
    price: 39,
    quantity: 2,
    date: ISODate('2016-03-16T22:00:00.000Z'),
    size: [ 'M' ],
    sumPrice: 78
  }
]
