// ✍️ Part 4 => Aggregation

// 1. Calculate the average age of users
// 2. Count the number of users in each city
// 3. Find the highest order total
// 4. Calculate the total sales (sum of all order totals)

// *** Solve Part 4 ***

=> db.users.aggregate([{$group:{_id:"users",avgAge:{$avg:"$age"}}}])

[ { _id: 'users', avgAge: 32 } ]

=> db.users.aggregate([{$group:{_id:"$city",countUsers:{$sum:1}}}])

[ { _id: 'Cairo', countUsers: 1 }, { _id: 'Alex', countUsers: 1 } ]

=>  db.orders.aggregate([{$group:{_id:"orders",maxTotal:{$max:"$total"}}}])

[ { _id: 'orders', maxTotal: 1000 } ]

=>  db.orders.aggregate([{$group:{_id:"orders",totalSales:{$sum:"$total"}}}])

[ { _id: 'orders', totalSales: 3200 } ]
