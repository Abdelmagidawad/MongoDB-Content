// -----Update Document---------

// updateOne => To Update a single document with the first match condition
// Syntax => db.collection.updateOne({filtering_criteria},{updated_object}) using $set to add or update this field
// Syntax => db.collection.updateOne({filtering_criteria},{updated_object}) using $unset:(to get any value like 1,true,"",0) to remove this field

=>db.books.updateOne({Pages:{$gt:50}},{$set:{Pages:50}}) // update the first match document

=>db.books.updateOne({Pages:{$gt:50}},{$unset:{Pages:50}}) // remove the first match document 


// updateMany => To Update a multi documents with  match condition
// Syntax => db.collection.updateMany({filtering_criteria},{updated_object}) using $set to add or update this field all documents with match condition
// Syntax => db.collection.updateMany({filtering_criteria},{updated_object}) using $unset:(to get any value like 1,true,"",0) to remove this field from all documents with match condition

=>db.books.updateMany({Pages:{$gte:50}},{$set:{Price:100}}) // add this field to all documents with match conditions

=>db.books.updateMany({Pages:{$gte:50}},{$unset:{Price:1}}) // remove this field to all documents with match conditions

 
=>use myBD
=>db.students.insertMany([{name: 'Ahmed',age: 25, phone: '+20'},{ name: 'Ali',age: 30,city: 'Cairo',phone: '+20'},{name: 'Said',age: 25,city: 'Cairo',phone: '+20'}])
=>db.students.find()
=>db.students.updateMany({age:{$gt:20}},{$set:{city:"Giza"},$unset:{phone:1}})
 

// replaceOne => to replace  full document with match condition to new document
// Syntax =>db.collection.replaceOne({filtering_criteria},{replacement(new document)})

=> db.students.replaceOne({age:26},{name:"Migo",age:25}) // to replace full document match condition to new document
