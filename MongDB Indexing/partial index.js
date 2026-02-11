// --Partial Index--
// => Partial indexes only index the documents in a collection that meet a specified filter expression. 

=> db.sessions.find()
=> db.sessions.getIndexes()
=> db.sessions.insertMany([{ name:'Sara',age: 35,address: 'Alex Egypt'},{ name:'Mona',age: 38,address: 'Cairo Egypt'}])

=> db.sessions.createIndex({age:1},{partialFilterExpression:{age:{$gte:30}}})
=> db.sessions.getIndexes()

=> db.sessions.find({age:25})
=> db.sessions.find({age:25}).explain("executionStats") // Stage=> COLLSCAN

=> db.sessions.find({age:30})
=> db.sessions.find({age:30}).explain("executionStats") // Stage=> IXSCAN

=> db.sessions.find({age:38})
=> db.sessions.find({age:38}).explain("executionStats") // Stage=> IXSCAN
