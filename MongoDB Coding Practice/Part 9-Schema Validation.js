// ✍️ Part 9 => Schema Validation

// Create validation rules for users collection:
    // name must be a string
   // age must be a number greater than 18
  // city is required


// *** Solve Part 9 ***

=> db.createCollection("Users",{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "city"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 },
        city: { bsonType: "string" }
      }
    }
  }
})

// { ok: 1 }

=> db.Users.insertOne({name:"Ali",age:15})

// Uncaught:
// MongoServerError: Document failed validation

=> db.Users.insertOne({name:"Ali",age:15,city:"Alex"})

// Uncaught:
// MongoServerError: Document failed validation

=> db.Users.insertOne({name:"Ali",age:20,city:"Alex"})

// {
//   acknowledged: true,
//   insertedId: ObjectId('69dba6bf0cb7279fb41e2623')
// }
