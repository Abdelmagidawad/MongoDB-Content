// --Compound Index (index more than of felids)--

=> db.stores.insertMany([{place:"Ismalia",number:20,area:"gamaa"},{place:"Cairo",number:20,area:"gamaa"},{place:"Cairo",number:20,area:"soltan"}])
=> db.stores.find()

=> db.stores.find({place:"Ismalia",area:"gamaa"}) 
=> db.stores.find({place:"Ismalia",area:"gamaa"}).explain("executionStats") // stage: COLLSCAN 

=> db.stores.createIndex({place:1,area:1}) // use compound Index
=> db.stores.getIndexes()
=> db.stores.find({place:"Ismalia",area:"gamaa"}).explain("executionStats") // stage: IXSCAN

// => order of compound Index is important 
// ({place:1,area:1}) this available to search place,area or place the stage=>IXSCAN , but use area search the stage=>COLLSACN 

=> db.stores.find({place:"Cairo",area:"soltan"}).explain("executionStats")
=> db.stores.find({place:"Cairo"}).explain("executionStats")
=> db.stores.find({area:"gamaa"}).explain("executionStats")

=> db.orders.insertMany([{usernum:10,status:"paid"},{usernum:10,status:"pending"},{usernum:10,status:"shipped"},{usernum:11,status:"paid"}])
=> db.orders.find()

=> db.orders.find({usernum:10,status:"paid"})
=> db.orders.find({usernum:10,status:"paid"}).explain("executionStats") //stage=> COLLSCAN
=> db.orders.createIndex({usernum:1,status:1})
=> db.orders.find({usernum:10,status:"paid"}).explain("executionStats") //stage=> IXSACN
=> db.orders.find({usernum:10}).explain("executionStats") //stage=> IXSCAN
=> db.orders.find({status:"paid"}).explain("executionStats") //stage=> COLLSCAN

=> db.stores.insertOne({place:"Ismalia",area:"soltan"})
=> db.stores.find()
=> db.stores.getIndexes()
=> db.stores.dropIndex('place_1_area_1')
=> db.stores.getIndexes()

=> db.stores.createIndex({place:1})
=> db.stores.getIndexes()
=> db.stores.find({place:"Ismalia"}).explain("executionStats")
=> db.stores.find({place:"Ismalia",area:"gamaa"})
=> db.stores.find({place:"Ismalia",area:"gamaa"}).explain("executionStats")
=> db.stores.dropIndex({place:1})
=> db.stores.getIndexes()

=> db.stores.createIndex({area:-1})
=> db.stores.getIndexes()
=> db.stores.find({area:"soltan"})
=> db.stores.find({area:"soltan"}).explain("executionStats")
=> db.stores.find({place:"Cairo",area:"soltan"})
=> db.stores.find({place:"Cairo",area:"soltan"}).explain("executionStats")

=> db.stores.insertOne({place:"Ismalia",area:"tagmoh"})
=> db.stores.find()
=> db.stores.find({place:"Ismalia",area:"gamaa"})
=> db.stores.find({place:"Ismalia",area:"gamaa"}).explian("executionStats")
=> db.stores.dropIndex({area:-1})
