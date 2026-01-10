// -----Collection.find() & Comparison Operators---------

// To -Get- all Documents in the Collection
=>=>db.collection-Name.find()
=>db.books.find()

// To -Get- all Organized Documents in the Collection
=>=>db.collection-Name.find().pretty() // pretty() to format the returned value
=>db.books.find().pretty()

// To Get all Documents by --Conditions Logical Operators--

// -Comparison query operators-

// Syntax operator == :{filed:value} 
=>=>db.collection-Name.find({filed:value}).pretty()
=>db.books.find({pages:100}).pretty() // to get documents with pages=100 

// Syntax operator > :{filed:{$gt:value}}
=>=>db.collection-Name.find({filed:{$gt:value}}).pretty()
=>db.books.find({pages:{$gt:100}}).pretty() // to get documents with pages>100 

// Syntax operator >= :{filed:{$gte:value}}
=>=>db.collection-Name.find({filed:{$gte:value}}).pretty()
=>db.books.find({pages:{$gte:100}}).pretty() // to get documents with pages>=100 

// Syntax operator < :{filed:{$lt:value}}
=>=>db.collection-Name.find({filed:{$lt:value}}).pretty()
=>db.books.find({Pages:{$lt:100}}).pretty() // to get documents with pages<100 

// Syntax operator <= :{filed:{$lte:value}}
=>=>db.collection-Name.find({filed:{$lte:value}}).pretty()
=>db.books.find({Pages:{$lte:100}}).pretty() // to get documents with pages<=100 

// Syntax operator != :{filed:{$ne:value}}
=>=>db.collection-Name.find({filed:{$ne:value}}).pretty()
=>db.books.find({Pages:{$ne:100}}) // to get documents with pages!=100 

// -And ,Or Condition-

// $and => returns true if all of the expressions are true
// Syntax => {$and:[{k1,v1},{k2,v2},{k3,v3}]}
=>db.books.find({$and:[{Pages:{$gt:100}},{Pages:{$lt:500}}]}) //to get all books with pages>100 and pages<500
=>db.books.find({Pages:100,Title:"Book1"}) //to get document book with pages=100 and title=Book1

// $or => first true expression
// Syntax => {$or:[{k1,v1},{k2,v2},{k3,v3}]}
=>db.books.find({$or:[{Pages:{$lt:100}},{Pages:{$gt:200}}]}) //to get all books with pages<100 and pages>200
=>db.books.find({$or:[{Title:"Book4"},{$and:[{Pages:{$gt:0}},{Pages:{$lt:100}}]}]})
//to get document book with title=Book4 or all books with pages in range 0 to 100

// -In ,Nin ,Exists ,Projection-

// $in(Comparison query operator) => to check the filed that is one of values insides list 
// Syntax => {filed:{$in:[value1,value2,value3,...]}}
=>db.books.find({Title:{$in:["Book1","Book2","Book3"]}}) //to return document book with title of Book1 or Book2 or Book3

// $nin(not in)(Comparison query operator) => to check the filed that not equal values insides list 
// Syntax => {filed:{$nin:[value1,value2,value3,...]}}
=>db.books.find({Title:{$nin:["Book2","Book3"]}}) //to return all documents books with not title of Book2 or Book3

// $exists(Element query operator) => matches document that have the specified field
// Syntax =>{field:{$exists:<Boolean>}}
=>db.books.find({Pages:{$exists:true}}) // to get all documents books with have field Pages
=>db.books.find({Pages:{$exists:false}}) // to get all documents books with not have field Pages

// Projection => to choice returns specified fields
// projection is the object that have fields returns but filed=1 to return ,filed=0 to not return
// Syntax =>db.collection.find({query},{projection})

=>db.books.find({},{ISBN:1,Title:1}) // to get all documents books with Filed ISBN,title only
=>db.books.find({},{Pages:0}) //  to get all documents books without filed Pages  


// -Arrays query operators-
// -$all ,$size ,$elemMatch

// $all(Array query operator) => to check the filed that have all values insides list 
// Syntax => {filed:{$all:[value1,value2,value3,...]}}
=>db.users.insertMany([{ name: 'Ali',age: 26,tags: [ 'html', 'css', 'js' ],scores: [ 10, 80, 50 ]},{ name:'Ahmed', age: 70,tags: [ 'js' ],scores: [ 50, 17 ]}])
=>db.users.find({tags:{$all:["js","css"]}}) //to return user with tags include js and css

// $size => to return documents with inside array to qual size 
// Syntax => {field:{$size:size-value}}
=>db.users.find({tags:{$size:3}}) //to return users with tags size=3

// $elemMatch => to check multi conditions to filed and important used array fo objects
// Syntax => {field:{$elemMatch:{condition1,condition2,...}}}
=>db.users.find({tags:{$elemMatch:{$gte:50 ,$lte:90}}}) //to return users with tags equal this range

// findOne() => to return a first match result
// Syntax => db.collection.findOne({field:value})
=>db.books.findOne({Pages:{$gt:50}}) // to return first book with Pages > 50 only

// -Nor ,Not ,Type operators-

// $nor => joins query returns all documents that fail to match both clauses
// Syntax => {$nor:[condition1,condition2,condition3,....]}
=>db.users.find({$nor:[{city:"Cairo"},{age:{$lt:18}}]}) // to return all users with not match this conditions

// $not => to return all documents that not match this field query
// Syntax => {field:{$not:{operator}}}
db.users.find({age:{$not:{$gt:30}}}) //to return all users with age not greater than 30

// $type => return documents with certain types
// Syntax => {field:{$type:"type"}}
=>db.users.find({age:{$type:"number"}})

