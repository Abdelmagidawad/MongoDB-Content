// *-*-*-*- Create a database called shopDB *-*-*-*-

=> use shopDB

// ✍️ Task 1 => Collections & Insert

// 1.Create a collection called users explicitly
// 2.Create a collection called orders implicitly
// 3.Insert the following documents into the users collection:
[
  { name: "Ahmed", age: 25, city: "Cairo", isActive: true, skills: ["JS", "Node"], balance: 1500 },
  { name: "Sara", age: 30, city: "Alex", isActive: false, skills: ["UI", "UX"], balance: 2500 },
  { name: "Omar", age: 22, city: "Cairo", isActive: true, skills: ["C++", "Problem Solving"], balance: 800 },
  { name: "Mona", age: 28, city: "Giza", isActive: true, skills: ["React", "Node"], balance: 3200 }
]

//  *-* Solve Task 1 *-*

=> db.createCollection("users")

=>  db.orders.insertOne({})
=> show collections

=> db.users.insertMany([
  { name: "Ahmed", age: 25, city: "Cairo", isActive: true, skills: ["JS", "Node"], balance: 1500 },
  { name: "Sara", age: 30, city: "Alex", isActive: false, skills: ["UI", "UX"], balance: 2500 },
  { name: "Omar", age: 22, city: "Cairo", isActive: true, skills: ["C++", "Problem Solving"], balance: 800 },
  { name: "Mona", age: 28, city: "Giza", isActive: true, skills: ["React", "Node"], balance: 3200 }
]
)
=> db.users.find()
