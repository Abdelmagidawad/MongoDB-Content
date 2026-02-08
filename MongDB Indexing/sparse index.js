// --Sparse Index--
// => Sparse indexes only contain entries for documents that have the indexed field, even if the index field contains a null value. The index skips over any document that is missing the indexed field.

=> db.students.insertMany([{name:"Sara",email:"sara@gmail.com",phone:"0105899999"},{name:"Mona",email:"mona@gmail.com",phone:"01259686"},{name:"Adele",email:"adele@gmail.com",phone:"011485963"}])
=> db.students.find()
=> db.students.find({phone:{$exists:true}}).count()

=> db.students.createIndex({phone:1},{sparse:true})
// => The index does not index documents that do not include the phone field.
=> db.students.getIndexes()

=> db.students.find({phone:"01259686"})
=> db.students.find({phone:"01259686"}).explain("executionStats")
=> db.students.find({phone:{$exists:true}})
=> db.students.find({phone:{$exists:true}}).explain("executionStats")

=> db.students.dropIndex({phone:1})
=> db.students.find({phone:{$exists:true}}).explain("executionStats")

=> db.students.createIndex({phone:1})
=> db.students.find({phone:{$exists:true}}).explain("executionStats") // totalDocsExamined: 8
=> db.students.dropIndex({phone:1})

=> db.students.createIndex({phone:1},{sparse:true})
=> db.students.find({phone:{$exists:true}})
=> db.students.find({phone:{$exists:true}}).explain("executionStats") // totalDocsExamined: 3

// Use Unique Index with Sparse Index 

=> db.students.insertMany([{name:"Tamer",email:"tamer@gmail.com",age:30},{name:"Mahmoud",email:"mahmoud@gmail.com",age:26}])

=> db.students.createIndex({age:1},{unique:true,sparse:true})
=> db.students.getIndexes()
=> db.students.find({age:{$exists:true}})
=> db.students.find({age:{$exists:true}}).explain("executionStats")

=> db.students.insertOne({name:"Ragab",email:"tamer@gmail.com",age:30}) 
// => MongoServerError: E11000 duplicate key error collection: indexes.students index: email_1 dup key: { email: "tamer@gmail.com" }

=> db.students.insertOne({name:"Ragab",email:"ragab@gmail.com",age:30}) 
// => MongoServerError: E11000 duplicate key error collection: indexes.students index: age_1 dup key: { age: 30 }

=> db.students.insertOne({name:"Ragab",email:"ragab@gmail.com",age:25}) 
=> db.students.find({age:{$exists:true}})
=> db.students.find({age:{$exists:true}}).count()

