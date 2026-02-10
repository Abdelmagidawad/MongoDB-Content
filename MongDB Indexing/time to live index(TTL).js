// --Time To Live Index (TTL)--
// => indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time or at a specific clock time.

=> db.sessions.createIndex({createdAt:1},{expireAfterSeconds:5})
=> db.sessions.inserMany([{name:"Ali",age:25,address:"Cairo Egypt"},({name:"Said",age:30,address:"Giza Egypt"}])
=> db.sessions.insertOne({name:"Ahmed",token: "abc123",createdAt:new Date() })
=> db.sessions.getIndexes()

=> db.sessions.find().explain("executionStats")
=> db.sessions.find({name:"Ahmed"}) // document exist
// => After 5 seconds 
=> db.sessions.find({name:"Ahmed"}) // document removed

=> db.otps.insertOne({   phone: "010xxxxxxx",   code: "4821",   createdAt: new Date() })
=> db.otps.insertOne({   phone: "011xxxxxxx",   code: "5896",   createdAt: new Date() })
=> db.otps.find()

=> db.otps.createIndex({createdAt:1},{expireAfterSeconds:10})
=>db.otps.getIndexes()

=> db.otps.find() //documents exists
// => After 10 seconds
=> db.otps.find() //documents removed

=> db.tokens.insertOne({
  token: "jwt-token",
  expiresAt: new Date("2026-02-10T15:00:00Z")
})

=> db.tokens.insertOne({  
  token: "jwt-token",   
  expiresAt: new Date("2026-02-10T14:03:20Z") 
})

=> db.tokens.createIndex({createdAt:1},{expireAfterSeconds:0})
=> db.tokens.getIndexes()
=> db.tokens.find()
