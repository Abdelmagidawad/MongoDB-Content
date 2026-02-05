// -----Projection Operators---------

// $ => Operator to projects the first element in an array that matches the query condition used to select the document.

=> db.users.insertOne({name:"Omar",age:24,subjects:["js","mongo","php"]})
=> db.users.insertOne({name:"Tamer",age:30,subjects:["js","typeScript","php"]})

=> db.users.find({subjects:"mongo"}) // to return all document with match condition
=> db.users.find({subjects:"mongo"},{"subjects.$":1,_id:0}) // to return value only with match condition

=> db.users.find({age:{$gt:25}},{"age.$":1}) //to return age only with match condition

// $elemMatch => Operator to projects the first element in an array that matches a specified condition

=> db.users.insertOne({name:"Sayed",yaer:2020,data:[{age:10,salary:100},{age:30,salary:60}]})
=> db.users.insertOne({name:"Khalid",yaer:2021,data:[{age:50,salary:17},{age:80,salary:1000}]})

=> db.users.find({data:{$elemMatch:{salary:17},$exists:true}}) //to return all documents with match conditions
=> db.users.find({},{data:{$elemMatch:{salary:{$gt:17}}},_id:0})

=> db.users.find({data:{$exists:true}},{data:{$elemMatch:{salary:{$gt:17}}}}) //to return a objs only with match conditions
=> db.users.find({data:{$exists:true}},{data:{$elemMatch:{salary:{$lt:20}}},_id:0})

=> db.users.find({scores:{$exists:true}},{scores:{$elemMatch:{$gt:20}},_id:0})

//
=> db.users.updateOne({name:"Ali"},{$set:{address:{city:"ismalia",street:"elmady"}}})
=> db.users.updateOne({name:"Mohamed"},{$set:{address:{city:"cairo",street:"madinet naser"}}})

=> db.users.find({address:{$type:"object"}})

=> db.users.find({"address.city":"cairo"}) //to get value with nested object
=> db.users.find({"address.city":"ismalia"},{"address.city.$":1,_id:0}) //to return value only with match query condition

=> db.users.find({subjects:"php"}) //to get value from array
=> db.users.find({subjects:"php"},{"subjects.$":1,_id:0}) //to return value only with match query condition

// $slice  => Operator to Limits the number of elements returned from an array
// Syntax => db.collection.find({},{field:{$slice:value}})

=> db.users.find({scores:{$exists:true}},{ scores:{$slice:1}}) //to return ony element from array
=> db.users.find({scores:{$exists:true}},{scores:{$slice:-2}}) //to return ony last two elements from array

=>  db.users.find({name:"Ali"},{scores:{$slice:-3}})

// => {field:{$slice:[skip,limit]}})
=>  db.users.find({name:"Ali"},{scores:{$slice:[1,2]}})
=>  db.users.find({name:"Ali"},{scores:{$slice:[1,1]}})

=>  db.users.updateOne({scores:{$slice:2}}) //Error => cannot use slice to update
