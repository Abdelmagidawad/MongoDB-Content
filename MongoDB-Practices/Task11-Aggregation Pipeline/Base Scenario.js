// => Base Scenario

// Work on this database:

=> use aggregationPracticeDB

// 👇 Users Collection

=> db.users.insertMany([
  { _id: 1, name: "Ahmed", age: 25, city: "Cairo" },
  { _id: 2, name: "Sara", age: 30, city: "Alex" },
  { _id: 3, name: "Omar", age: 22, city: "Cairo" },
  { _id: 4, name: "Mona", age: 28, city: "Giza" }
])


// 👇 Orders Collection

=> db.orders.insertMany([
  { userId: 1, product: "Laptop", price: 1000, quantity: 1, createdAt: new Date("2024-01-10") },
  { userId: 1, product: "Mouse", price: 50, quantity: 2, createdAt: new Date("2024-02-10") },
  { userId: 2, product: "Keyboard", price: 150, quantity: 1, createdAt: new Date("2024-01-15") },
  { userId: 3, product: "Monitor", price: 300, quantity: 1, createdAt: new Date("2024-03-01") },
  { userId: 4, product: "Laptop", price: 1200, quantity: 1, createdAt: new Date("2024-02-20") }
])

=> show collections 

=> db.users.find()

=> db.orders.find()
