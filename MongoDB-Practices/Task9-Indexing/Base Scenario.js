// => Base Scenario => Work on a new database
=> use indexPracticeDB

=> db.users.insertMany([
  { name: "Ahmed", email: "ahmed@gmail.com", age: 25, city: "Cairo", isActive: true, tags: ["node", "backend"], createdAt: new Date("2024-01-01") },
  { name: "Sara", email: "sara@gmail.com", age: 30, city: "Alex", isActive: false, tags: ["ui", "design"], createdAt: new Date("2023-06-01") },
  { name: "Omar", email: "omar@gmail.com", age: 22, city: "Cairo", isActive: true, tags: ["cpp", "problem solving"], createdAt: new Date("2025-01-01") },
  { name: "Mona", email: "mona@gmail.com", age: 28, city: "Giza", isActive: true, tags: ["react", "frontend"], createdAt: new Date("2024-05-01") }
])
