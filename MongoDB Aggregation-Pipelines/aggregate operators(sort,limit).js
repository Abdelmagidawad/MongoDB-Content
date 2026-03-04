// => $sort

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$price","$quantity"]}}}},{$sort:{totalSales:-1}}])

// output
[
  { _id: '2020', totalSales: 600 },
  { _id: '2016', totalSales: 528 },
  { _id: '2019', totalSales: 301 },
  { _id: '2018', totalSales: 150 },
  { _id: '2017', totalSales: 20 }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$price","$quantity"]}}}},{$sort:{totalSales:1}}])

// output
[
  { _id: '2017', totalSales: 20 },
  { _id: '2018', totalSales: 150 },
  { _id: '2019', totalSales: 301 },
  { _id: '2016', totalSales: 528 },
  { _id: '2020', totalSales: 600 }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$price","$quantity"]}}}},{$sort:{_id:1}}])

// output
[                                     
  { _id: '2016', totalSales: 528 },   
  { _id: '2017', totalSales: 20 },    
  { _id: '2018', totalSales: 150 },   
  { _id: '2019', totalSales: 301 },   
  { _id: '2020', totalSales: 600 }    
]     

=> db.sales.aggregate([{$group:{_id:"$item",count:{$sum:2}}},{$sort:{count:-1}}])

// output
[
  { _id: 'xzy', count: 6 },
  { _id: 'fds', count: 4 },
  { _id: 'abc', count: 4 },
  { _id: 'efg', count: 2 }
]



// => $limit

=> db.sales.aggregate([{$group:{_id:"$item",count:{$sum:2}}},{$sort:{count:-1}},{$limit:1}])

// output
[ { _id: 'xzy', count: 6 } ]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$quantity","$price"]}}}},{$sort:{_id:-1}},{$limit:2}])

// output
[ { _id: '2020', totalSales: 600 }, { _id: '2019', totalSales: 301 } ]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$quantity","$price"]}}}},{$limit:3}])

// output
[
  { _id: '2020', totalSales: 600 },
  { _id: '2016', totalSales: 528 },
  { _id: '2017', totalSales: 20 }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$quantity","$price"]}}}},{$limit:3},{$project:{_id:0,year:"$_id",totalSales:1}}])

// output
[
  { totalSales: 600, year: '2020' },
  { totalSales: 528, year: '2016' },
  { totalSales: 20, year: '2017' }
]
