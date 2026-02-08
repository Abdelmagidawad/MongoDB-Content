// --Unique Index--
// => A unique index ensures that the indexed fields do not store duplicate values

=> db.students.insertMany([{name:"Ali",email:"ali@gmail.com"},{name:"Ahmed",email:"ahmed@gmail.com"},{name:"Omar",email:"omar@gmail.com"},{name:"Mohamed",email:"mohamed@gmail.com"}])
=> db.students.find()

=> db.students.find({email:"omar@gmail.com"})
=> db.students.find({email:"omar@gmail.com"}).explain("executionStats")

=> db.students.createIndex({email:1},{unique:true})
=> db.students.getIndexes() 

=> db.students.find({email:"mohamed@gmail.com"})
=> db.students.find({email:"mohamed@gmail.com"}).explain("executionStats")

=> db.students.insertOne({name:"Said",email:"ali@gmail.com"})
// => MongoServerError: E11000 duplicate key error collection: indexes.students index: email_1 dup key: { email: "ali@gmail.com" }

=> db.students.insertOne({name:"Said",email:"said@gmail.com"})
=> db.students.find()
=> db.students.find({email:"said@gmail.com"}).explain("executionStats")
