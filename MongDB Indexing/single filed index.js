// -------Indexes in MongoDB-------

// Indexes => MongoDB uses the index to limit the number of documents it must scan

// => Don`t use index
=> db.users.find({age:24}); // MongoDB use the Collation Scan(COLLSCAN) to get documents

// Use index 
=> db.users.createIndex({age:1}) // create index to this fields in MongoDB
// age_1 => this index
=> db.users.find({age:24}) // MongoDB use Index(IXSCAN) to get documents At high speed

=> use indexes 
=> new Array(1000000).fill(1).forEach((x,i)=> db.users.insertOne({username: `Ali ${i}`}))

// user new tap from console 
=> use indexes

=>  db.users.count()
=>  db.users.find().count()
=>  db.users.find({username:"Ali 44193"})

=>  db.users.find({username:"Ali 44193"}).explain("executionStats") // to get all execution stats to this query

// --index(single field index)--
// syntax => db.collection.createIndex({filed:1(ascending),-1(descending)}) to create index to any filed use search it

=> db.users.createIndex({username:1})
=> db.user.find({username:"Ali 44193"})
=> db.user.find({username:"Ali 44193"}).explain("executionStats")

// db.collection.getIndexes() => to get all indexes inside collection
=> db.users.getIndexes()

// db.collection.dropIndex({filed:1(ascending),-1(descending)}) to remove index from any filed
=> db.users.dropIndex({username:1})
=> db.users.getIndexes()
