// --Create Index Object--
// Create Index field inside array of objects and field inside object 

=> db.posts.insertMany([
    {name:"Post1",comments:[{content:"success",status:"uploaded"}]},
    {name:"Post2",comments:[{content:"fail",status:"uploaded"}]},
    {name:"Post3",comments:[{content:"pend",status:"process"}]}
])
=> db.posts.find()
=> db.posts.find({comments:{$elemMatch:{content:"pend"}}}).explain("executionStats")  //stage => COLLSCAN

=> db.posts.createIndex({"comments.content":1})
=> db.posts.getIndexes()

=> db.posts.find()
=> db.posts.find({comments:{$elemMatch:{content:"pend"}}}).explain("executionStats")  //stage => IXSCAN

=> db.posts.insertOne({title:"test",address:{test:"1",name:"2"}})
=> db.posts.find()

=> db.posts.find({"address.test":"1"})
=> db.posts.find({"address.test":"1"}).explain("executionStats") // stage=> COLLSCAN

=> db.posts.createIndex({"address.test":1})
=> db.posts.getIndexes()

=>  db.posts.find({"address.test":"1"})
=>  db.posts.find({"address.test":"1"}).explain("executionStats")
