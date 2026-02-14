// -------Backup & Restore in MongoDB-------

// => MongoDB have a Two Ways to Backup Data 

//   => mongexport & mongoimport => to use share Data
//   => mongodump & mongorestore => to use full backup Database


// --Mongoexport & Mongoimport(Export&Import Data in MongoDB)--

//     --Export--
// => mongoexport is a database tool that produces a JSON or CSV export of data stored in a MongoDB instance.

=> use shopDB
=> show collections
=> db.products.insertMany([
    {name:"Keyboard",price:800,category:"Electronic"},
    {name:"Printer",price:1500,category:"Electronic"},
    {name:"Watch",price:950,category:"Digital"}
])

// => export use JSON extention

// => use CMD 
=> mongoexport --db shopDB --collection products --out products.json
// => output
// 2026-02-14T17:43:49.659+0200    connected to: mongodb://localhost/
// 2026-02-14T17:43:49.870+0200    exported 3 records

=> mongoexport --db shopDB --collection users --out users.json
// => output
// 2026-02-14T17:50:04.837+0200    connected to: mongodb://localhost/
// 2026-02-14T17:50:04.854+0200    exported 2 records

=>use schoolDB
=> db.students.insertMany([
    {name:"Ali",age:22,division:"Computer Science"},
    {name:"Omar",age:23,division:"Information Technology"},
    {name:"Said",age:21,division:"Management"}
])

=> show collections
=> db.students.find()

// => use CMD 
=> mongoexport --db schoolDB --collection students --out "E:\students.json"
// => output
// 2026-02-14T20:03:10.840+0200    connected to: mongodb://localhost/
// 2026-02-14T20:03:10.872+0200    exported 3 records

// => export use CSV extention
=> use shopDB
=> show collections
=> db.products.find()
=> db.users.find()

// => use CMD 
=> mongoexport --db shopDB --collections products --type csv --fields name,price,category --out products.csv
// => output
// 2026-02-14T20:19:48.671+0200    connected to: mongodb://localhost/
// 2026-02-14T20:19:48.778+0200    exported 3 records

=> mongoexport --db shopDB --collection users --type csv --fields name,age,balance --out users.csv
// => output
// 2026-02-14T20:27:45.163+0200    connected to: mongodb://localhost/
// 2026-02-14T20:27:45.168+0200    exported 2 records


//   --Import--

// => mongoimport restores a database from a backup taken with mongoexport

// => import use JSON extention

// use CMD 
=> mongoimport --db shopDB --collection products --file products.json
// => output
// 2026-02-14T20:44:22.981+0200    connected to: mongodb://localhost/
// 2026-02-14T20:44:23.271+0200    continuing through error: E11000 duplicate key error collection: shopDB.products index: _id_ dup key: { _id: ObjectId('6990809d80fb34c9bd1e2623') }
// 2026-02-14T20:44:23.271+0200    continuing through error: E11000 duplicate key error collection: shopDB.products index: _id_ dup key: { _id: ObjectId('6990809d80fb34c9bd1e2621') }
// 2026-02-14T20:44:23.272+0200    continuing through error: E11000 duplicate key error collection: shopDB.products index: _id_ dup key: { _id: ObjectId('6990809d80fb34c9bd1e2622') }
// 2026-02-14T20:44:23.272+0200    0 document(s) imported successfully. 3 document(s) failed to import.

// => Error the data repeted (add the same data)
// => this remove the old data in the collection products and import the new data

// use mongosh 
=> use shopDB db.products.drop()
=> show collections 

// use CDM 
=> mongoimport --db shopDB --collection products --file products.json
// => output
// 2026-02-14T20:55:41.366+0200    connected to: mongodb://localhost/
// 2026-02-14T20:55:42.008+0200    3 document(s) imported successfully. 0 document(s) failed to import.

// use mongosh 
=> use shopDB
=> show collections
=> db.products.find()

=> use schoolDB
=> show collections
=> db.students.find()
=> db.students.drop()
=> show collections

// use CMD 
=> mongoimport --db schoolDB --collection students --file students.json
// => output
// 2026-02-14T21:03:56.854+0200    connected to: mongodb://localhost/
// 2026-02-14T21:03:56.998+0200    3 document(s) imported successfully. 0 document(s) failed to import.

// use mongosh 
=> show collections
=> db.students.find()

// use CMD 
=> mongoimport --db schoolDB --collection students --file students.json --drop
// => output
// 2026-02-14T21:14:40.192+0200    connected to: mongodb://localhost/
// 2026-02-14T21:14:40.193+0200    dropping: schoolDB.students
// 2026-02-14T21:14:40.271+0200    4 document(s) imported successfully. 0 document(s) failed to import.

=> db.students.find()

// use mongosh 
=> use shopDB
=> show collections
=> db.products.find()

// use CMD 
=> mongoimport --db shopDB --collection products --file products.json --drop
// => output
// 2026-02-14T21:21:15.425+0200    connected to: mongodb://localhost/
// 2026-02-14T21:21:15.427+0200    dropping: shopDB.products
// 2026-02-14T21:21:15.484+0200    5 document(s) imported successfully. 0 document(s) failed to import.

// => import use CSV extention

=>mongoimport --db shopDB --collection products --type csv --headerline --file "E:\product.csv" --drop
// => output
// 2026-02-14T21:34:39.907+0200    connected to: mongodb://localhost/
// 2026-02-14T21:34:39.909+0200    dropping: shopDB.products
// 2026-02-14T21:34:39.999+0200    3 document(s) imported successfully. 0 document(s) failed to import.

