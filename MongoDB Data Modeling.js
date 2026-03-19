// => Data Modeling => refers to the organization of data within a database and the links between related entities.

// => In MongoDB, you can model relationships by either embedding or referencing your data. By choosing the best data-linking method, you can optimize your data model for your application's specific access patterns.

// Embedding & Referencing

// => Embedding stores related data within a single document, using sub-documents or arrays.

// => users collection and orders using embedding
{
  _id:1,
  name:"Ali",
  age:25,
  orders:[
    {product:"Laptop",price:19000},
    {product:"Keyboard",price:1000}
  ]
}

// => users collection and address using embedding
{
  _id: 1,
  name: "Ahmed",
  email: "ahmed@gmail.com",
  addresses: [
    { city: "Cairo", street: "Nasr City" },
    { city: "Alex", street: "Stanley" }
  ]
}


// => Referencing stores related data in separate collections and links them using the _id field (or other unique identifiers).

// => users collection and orders collection using referencing
{
  _id:1,
  name:"Ali",
  age:25
}
{
  _id:101,
  product:"Laptop",
  price:19000,
  userId:1
}
{
  _id:102,
  product:"Keyboard",
  price:1000,
  userId:1
}

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"orders"
   }}
])

// output

{
  _id:1,
  name:"Ali",
  age:25,
  orders:[
    {product:"Laptop",price:19000},
    {product:"Keyboard",price:1000}
  ]
}
