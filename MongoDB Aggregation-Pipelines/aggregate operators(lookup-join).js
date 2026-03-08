// => $lookup
// => lookup like join in SQL

// => Syntax
{
   $lookup: {
      from: "collectionName", //=> the collections that we want to get the document from
      localField: "fieldHere", //=> the foreign key in my document
      foreignField: "fieldThere", //=> the field in the other collection that relate to my userId
      as: "resultArray" //=> new field result name 
   }
}

=> db.users.insertMany([
  {_id:1,username:"Ahmed",age:20},
  {_id:2,username:"Sara",age:25},
])
=> db.users.find()

=> db.orders2.insertMany([
  {_id:101,product:"Laptop",userId:1},
  {_id:102,product:"Mouse",userId:1},
  {_id:103,product:"Keyboard",userId:2},
])
=> db.orders2.find()

=> db.users.aggregate([
  {$lookup:{
    form:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"usersOrders"
  }
}])

// output
[                                                                       
  {                                                                     
    _id: 1,                                                             
    username: 'Ahmed',                                                  
    age: 20,                                                            
    usersOrders: [                                                      
      { _id: 101, product: 'Laptop', userId: 1 },                       
      { _id: 102, product: 'Mouse', userId: 1 }                         
    ]                                                                   
  },                                                                    
  {                                                                     
    _id: 2,                                                             
    username: 'Sara',                                                   
    age: 25,                                                            
    usersOrders: [ { _id: 103, product: 'Keyboard', userId: 2 } ]       
  }                                                                     
]  

=> db.orders2.insertOne({_id:104,product:"Screen",userId:2})
=> db.orders2.find()

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }}
])

// output
[
  {
    _id: 1,
    username: 'Ahmed',
    age: 20,
    userOrders: [
      { _id: 101, product: 'Laptop', userId: 1 },
      { _id: 102, product: 'Mouse', userId: 1 }
    ]
  },
  {
    _id: 2,
    username: 'Sara',
    age: 25,
    userOrders: [
      { _id: 103, product: 'Keyboard', userId: 2 },
      { _id: 104, product: 'Screen', userId: 2 }
    ]
  }
]
