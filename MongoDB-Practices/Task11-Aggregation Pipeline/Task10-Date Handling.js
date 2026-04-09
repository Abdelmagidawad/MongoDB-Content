// ✍️ Task 10 => Date Handling

// Group orders by month
// 👉 Output format: "2024-01", "2024-02"
// 👉 Use: $dateToString

//  *-* Solve Task 10 *-*

=> db.orders.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m",date:"$createdAt"}}}}])

// output
[ { _id: '2024.03' }, 
  { _id: '2024.01' }, 
  { _id: '2024.02' } 
]

=> db.orders.aggregate([{$group:{_id:{$dateToString:{format:"%Y.%m",date:"$createdAt"}},totalOrders:{$sum:1}}}])

// output
[
  { _id: '2024.02', totalOrders: 2 },
  { _id: '2024.01', totalOrders: 2 },
  { _id: '2024.03', totalOrders: 1 }
]
