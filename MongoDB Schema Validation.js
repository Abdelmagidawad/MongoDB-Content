// => MongoDB schema validation => is a feature that allows you to enforce a specific structure and data types for documents within a collection, ensuring data quality and consistency.

// Syntax 
=> db.createCollection("test",{validator:{}})

=> db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          description: "must be an integer and is required"
        }
      }
    }
  }
})

=> db.users.insertOne({
  name: "Ali",
  age: 25
})

=> db.users.insertOne({
  name: "Ali"
})
// Error age missing

=> db.users.insertOne({
  name: "Ali",
  age: "25"
})
// Error  age not string type