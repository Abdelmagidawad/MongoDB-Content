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
