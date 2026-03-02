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
