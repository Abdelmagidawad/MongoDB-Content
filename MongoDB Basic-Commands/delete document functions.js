// -----Delete Document---------

// deleteOne => To Delete a single document with the first match condition
// Syntax => db.collection.deleteOne({filtering_criteria}) 

=> db.students.deleteOne({age:25}) //to delete first document with match condition

// deleteMany => To Delete a multi documents with  match condition
// Syntax => db.collection.deleteMany({filtering_criteria})

=> db.students.deleteMany({name:{$in:["Ahmed","Ali"]}}) //to delete all documents with match condition

=> db.students.deleteMany({}) // to delete all documents with match condition ro to empty collection from all documents

// Convert a Collection to Capped Collection using
// Syntax => db.runCommand("convertTocapped": "<collection-Name>", "size": <size>)

=>db.runCommand({ "convertToCapped": "students", "size": 100000 })

=>db.students.isCapped() // true
