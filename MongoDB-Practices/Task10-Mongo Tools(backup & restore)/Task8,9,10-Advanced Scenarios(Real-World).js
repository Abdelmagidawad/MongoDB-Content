// ✍️ Task 8 => Advanced Scenarios (Real-World)

// You want to:
// 1. Take a daily backup of the database
// 2. Store it in a folder named with the current date

// 👉 Write the command to achieve this

//  *-* Solve Task 8 *-*

// Use Git Bash

=> mongodump --db backupPracticeDB --out backup_$(date +F)/

// output
// 2026-04-05T22:02:20.478+0200    writing backupPracticeDB.users to backup_F\backupPracticeDB\users.bson
// 2026-04-05T22:02:20.480+0200    writing backupPracticeDB.orders to backup_F\backupPracticeDB\orders.bson
// 2026-04-05T22:02:20.486+0200    done dumping backupPracticeDB.orders (2 documents)
// 2026-04-05T22:02:20.488+0200    done dumping backupPracticeDB.users (3 documents)

// ✍️ Task 9 ***********

// You want to move data from:

// Database A → Database B

// Using:
// mongoexport + mongoimport

//  *-* Solve Task 9 *-*

=> use dbA

=> db.products.insertMany([
  {name:"Mouse" ,price:1500},
  {name:"MousePad" ,price:100},
  {name:"Keyboard" ,price:2000}
])

=> use dbB

=> mongoexport --db dbA --collection products --out products.json

// output
// 2026-04-05T22:18:11.192+0200    connected to: mongodb://localhost/
// 2026-04-05T22:18:11.199+0200    exported 3 records

=> mongoimport --db dbB --collection products --file products.json

// output
// 2026-04-05T22:19:49.901+0200    connected to: mongodb://localhost/
// 2026-04-05T22:19:49.985+0200    3 document(s) imported successfully. 0 document(s) failed to import.

=>  db.products.find({},{name:1,price:1})

// output
[
  {
    _id: ObjectId('69d2c2f6325d941cac1e2627'),
    name: 'Keyboard',
    price: 2000
  },
  {
    _id: ObjectId('69d2c2f6325d941cac1e2626'),
    name: 'MousePad',
    price: 100
  },
  {
    _id: ObjectId('69d2c2f6325d941cac1e2625'),
    name: 'Mouse',
    price: 1500
  }
]


// ✍️ Task 10 **************

// You have a production database and want to:

//  Backup only the users collection
//  Exclude orders

// 👉 How would you do that using mongodump?

//  *-* Solve Task 10 *-*

=> use productionDB 

=> db.users.insertMany([
  { name: "Ahmed", age: 25, city: "Cairo" },
  { name: "Sara", age: 30, city: "Alex" }
])

=> db.orders.insertMany([
  { user: "Ahmed", total: 200 },
  { user: "Sara", total: 500 }
])

=> mongodump --db productionDB --collection users --out DataProduction/

// output
// 2026-04-05T22:30:43.319+0200    writing productionDB.users to DataProduction\productionDB\users.bson
// 2026-04-05T22:30:43.371+0200    done dumping productionDB.users (2 documents)
