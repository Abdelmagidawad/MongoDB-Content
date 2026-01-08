// -----Create, Show, Drop Collection and Insert Documents---------

// ---Create & -Insert- Documents

// Have a Two Ways to Create Collection =>Implicit & Explicit
// 1- Implicit creation of Collection  
=>=> db.collection-Name.insertOne({document as json like});
=>db.students.insertOne({name:"Migo",age:25});
// this mongoDB Create this collection and insert document on this collection

// 2-Explicit creation of Collection
=>=>db.createCollection("collection-Name",options);
=>db.createCollection("users",{
    capped:true, //define the size of collection
    size:10,    //the size in bytes
    max:2,     //define the number of documents in that collection
    autoIndexId:true // create an index on id filed 
})
=>db.users.insertOne({name:"ali",age:26})

// To show all collections on Database
=>show collections

// To get all documents on Collection
=>=> db.collection-Name.find()
=>db.users.find()

// To check if the collection is capped
=>=>db.collection-Name.isCapped()
=>db.users.isCapped()

// To Delete Collections and documents inside to this collection
=>=>db.collection-Name.drop()
=>db.users.drop()

// To insert Multiple documents on the collection in the same line command
=>=>db.collection-Name.insertMany([{document1},{document2},{document2},...])
=>db.users.inserMany([{name:"Ahmed",age:15},{name:"Omar",age:25},{name:"Ragab",age:26}])

// Validator options => to must the documents of collection that have validator fields
// Explicit creation of Collection with add validator options
=>=>db.createCollection("collection-Name",validator options);
=>db.createCollection("todos",{
    //define the validator of fields document in collection
    validator:{
        $and:[
            {title:{$type:"string"}},
            {status:{$in:["todo","doing","done"]}}
        ]
    }
})
=>db.todos.insertOne({title:"todo1",status:"todo"}) //{ok:1}
=>db.todos.insertOne({title:11,status:"todo"}) //Error
=>db.todos.insertOne({title:"todo2"}) //Error
