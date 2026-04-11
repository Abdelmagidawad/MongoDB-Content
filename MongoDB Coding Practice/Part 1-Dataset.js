// ✍️ Part 1 => Dataset

=> use ecommerceDB

=> db.users.insertMany([
  { _id: 1, name: "Ali", age: 22, city: "Cairo" },
  { _id: 2, name: "Sara", age: 28, city: "Alex" },
  { _id: 3, name: "Omar", age: 35, city: "Cairo" }
])

=> db.products.insertMany([
  { _id: 1, name: "Laptop", price: 1000, category: "Tech" },
  { _id: 2, name: "Phone", price: 500, category: "Tech" },
  { _id: 3, name: "Shoes", price: 200, category: "Fashion" }
])

=> db.orders.insertMany([
  { _id: 1, userId: 1, productId: 1, quantity: 1, total: 1000, date: new Date("2024-01-10") },
  { _id: 2, userId: 1, productId: 2, quantity: 2, total: 1000, date: new Date("2024-02-15") },
  { _id: 3, userId: 2, productId: 3, quantity: 1, total: 200, date: new Date("2024-03-01") },
  { _id: 4, userId: 3, productId: 1, quantity: 1, total: 1000, date: new Date("2024-03-10") }
])

=> show collections

// orders
// products
// users
