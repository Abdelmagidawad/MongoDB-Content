// => $group

=> db.orders.aggregate([{$group:{_id:"$branch"}}])
// output
[ { _id: 'Ismalia' }, { _id: 'Alex' }, { _id: 'Cairo' } ]


//  =>$avg

=> db.orders.aggregate([{$group:{_id:"$branch",averagePrice:{$avg:"total"}}}]) //return averagePrice=null
// output
[
  { _id: 'Ismalia', averagePrice: null },
  { _id: 'Alex', averagePrice: null },
  { _id: 'Cairo', averagePrice: null }
]

=> db.orders.aggregate([{$group:{_id:"$branch",averagePrice:{$avg:"$total"}}}])
// output
[
  { _id: 'Cairo', averagePrice: 208.33333333333334 },
  { _id: 'Alex', averagePrice: 175 },
  { _id: 'Ismalia', averagePrice: 991.25 }
]


//  =>$sum

=> db.orders.aggregate([{$group:{_id:"$branch",sumPrice:{$sum:"$total"}}}])
// output
[
  { _id: 'Ismalia', sumPrice: 7930 },
  { _id: 'Alex', sumPrice: 700 },
  { _id: 'Cairo', sumPrice: 1250 }
]


//  =>$max

=> db.orders.aggregate([{_id:"$branch",maxPrice:{$max:"$total"}}])
// output
[
  { _id: 'Cairo', maxPrice: 400 },
  { _id: 'Alex', maxPrice: 300 },
  { _id: 'Ismalia', maxPrice: 6000 }
]


//  =>$min

=> db.orders.aggregate([{$group:{_id:"$branch",minPrice:{$min:"$total"}}}])
// output
[                                      
  { _id: 'Ismalia', minPrice: 10 },    
  { _id: 'Alex', minPrice: 50 },       
  { _id: 'Cairo', minPrice: 20 }       
]               

=> db.orders.aggregate([{$group:{_id:null,minPrice:{$min:"$total"}}}])
// output
[ { _id: null, minPrice: 10 } ]

=> db.orders.aggregate([{$group:{_id:null,maxPrice:{$max:"$total"}}}])
// output
[ { _id: null, maxPrice: 6000 } ]

=> db.orders.aggregate([{$group:{_id:null,averagePrice:{$avg:"$total"}}}])
// output
[ { _id: null, averagePrice: 548.8888888888889 } ]

=> aggregates> db.orders.aggregate([{$group:{_id:null,sumPrice:{$sum:"$total"}}}])
// output
[ { _id: null, sumPrice: 9880 } ]

=>  db.orders.aggregate([{$group:{_id:"branch",sumPrice:{$sum:"$total"}}}])
// output
[ { _id: 'branch', sumPrice: 9880 } ]

=>  db.orders.aggregate([{$group:{sumPrice:{$sum:"$total"}}}])
// output
// MongoServerError[Location15955]: a group specification must include an _id
//  *-*-*-

=>  db.orders.aggregate([{$match:{total:{$gt:400}}},{$project:{branch:1,total:1,_id:0}}])
// output
[
  { branch: 'Ismalia', total: 700 },
  { branch: 'Ismalia', total: 550 },
  { branch: 'Ismalia', total: 6000 }
]

=> db.orders.aggregate([{$group:{_id:"$branch",maxtotal:{$max:"$total"}}}])
// output
[
  { _id: 'Ismalia', maxtotal: 6000 },
  { _id: 'Alex', maxtotal: 300 },
  { _id: 'Cairo', maxtotal: 400 }
]

//  *-*-*-
=> db.sales.insertMany([
  {item:"abc",price:10,quantity:5,date:new Date(2016,11,17),size:["S","M","L"]},
  {item:"abc",price:10,quantity:2,date:new Date(2017,3,17),size:["S"]},
  {item:"efg",price:39,quantity:2,date:new Date(2016,2,17),size:["M"]},
  {item:"xzy",price:50,quantity:2,date:new Date(2020,5,17)},
  {item:"xzy",price:50,quantity:8,date:new Date(2016,8,17),size:["S"]},
  {item:"xzy",price:50,quantity:3,date:new Date(2018,3,17),size:["S","M"]},
  {item:"fds",price:43,quantity:7,date:new Date(2019,9,17),size:["M"]},
  {item:"fds",price:100,quantity:5,date:new Date(2020,11,17),size:["L"]},
])

=> db.sales.find()

//   $multiply

=> db.sales.aggregate([{$group:{_id:"$item",totalSales:{$sum:{$multiply:["$price","$quantity"]}}}}])
// output
[
  { _id: 'efg', totalSales: 78 },
  { _id: 'abc', totalSales: 70 },
  { _id: 'xzy', totalSales: 650 },
  { _id: 'fds', totalSales: 801 }
]

=> db.sales.aggregate([{$group:{_id:"$item",maxSales:{$max:{$multiply:["$price","$quantity"]}}}}])
// output
[
  { _id: 'fds', maxSales: 500 },
  { _id: 'efg', maxSales: 78 },
  { _id: 'abc', maxSales: 50 },
  { _id: 'xzy', maxSales: 400 }
]


// count

=>  db.sales.aggregate([{$group:{_id:"$item",count:{$sum:1}}}])
// output
[
  { _id: 'xzy', count: 3 },
  { _id: 'abc', count: 2 },
  { _id: 'efg', count: 1 },
  { _id: 'fds', count: 2 }
]

=> db.sales.find()

=> db.sales.aggregate([{$group:{_id:"$date"}}])
// output
[
  { _id: ISODate('2020-12-16T22:00:00.000Z') },
  { _id: ISODate('2016-09-16T22:00:00.000Z') },
  { _id: ISODate('2017-04-16T22:00:00.000Z') },
  { _id: ISODate('2016-12-16T22:00:00.000Z') },
  { _id: ISODate('2016-03-16T22:00:00.000Z') },
  { _id: ISODate('2018-04-16T22:00:00.000Z') },
  { _id: ISODate('2019-10-16T22:00:00.000Z') },
  { _id: ISODate('2020-06-16T22:00:00.000Z') }
]


//  => $dateToString

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}}}}])
// output
[
  { _id: '2018' },
  { _id: '2020' },
  { _id: '2016' },
  { _id: '2017' },
  { _id: '2019' }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m",date:"$date"}}}}])
// output
[
  { _id: '2020.12' },
  { _id: '2020.06' },
  { _id: '2017.04' },
  { _id: '2016.12' },
  { _id: '2016.03' },
  { _id: '2018.04' },
  { _id: '2016.09' },
  { _id: '2019.10' }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m.%d",date:"$date"}}}}])
// output
[
  { _id: '2020.12.16' },
  { _id: '2020.06.16' },
  { _id: '2017.04.16' },
  { _id: '2016.12.16' },
  { _id: '2016.03.16' },
  { _id: '2016.09.16' },
  { _id: '2018.04.16' },
  { _id: '2019.10.16' }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}}}}])
// output
[
  { _id: '2018' },
  { _id: '2020' },
  { _id: '2016' },
  { _id: '2017' },
  { _id: '2019' }
]

=>  db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y",date:"$date"}},totalSales:{$sum:{$multiply:["$price","$quantity"]}}}}])
// output
[
  { _id: '2019', totalSales: 301 },
  { _id: '2017', totalSales: 20 },
  { _id: '2016', totalSales: 528 },
  { _id: '2020', totalSales: 600 },
  { _id: '2018', totalSales: 150 }
]

=> db.sales.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m",date:"$date"}},totalSales:{$sum:{$multiply:["$price","$quantity"]}}}}])
// output
[
  { _id: '2020.12', totalSales: 500 },
  { _id: '2020.06', totalSales: 100 },
  { _id: '2017.04', totalSales: 20 },
  { _id: '2016.12', totalSales: 50 },
  { _id: '2016.03', totalSales: 78 },
  { _id: '2016.09', totalSales: 400 },
  { _id: '2018.04', totalSales: 150 },
  { _id: '2019.10', totalSales: 301 }
]

