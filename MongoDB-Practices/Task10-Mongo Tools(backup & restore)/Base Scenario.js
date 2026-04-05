// => Base Scenario

// Work on a database:

=> use backupPracticeDB

// Create sample data:

=> db.users.insertMany([
  { name: "Ahmed", age: 25, city: "Cairo" },
  { name: "Sara", age: 30, city: "Alex" }
])

=> db.orders.insertMany([
  { user: "Ahmed", total: 200 },
  { user: "Sara", total: 500 }
])
