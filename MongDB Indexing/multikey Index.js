// --Multikey Index(Arrays)-- 

// => MongoDB automatically creates a multikey index when an index is created on a field that contains an array value.

=> db.posts.insertOne({
  name: "Ali",
  skills: ["js", "node", "mongo"]
}
)

=> db.posts.find()
=> db.posts.createIndex({skills:1})
=> db.posts.getIndexes()

=> db.posts.find({skills:"mongo"})
=> db.posts.find({skills:"mongo"}).explain("executionStats")

=> db.posts.find({skills:"js"}).explain("executionStats")
=> db.posts.find({skills:"node"}).explain("executionStats")
