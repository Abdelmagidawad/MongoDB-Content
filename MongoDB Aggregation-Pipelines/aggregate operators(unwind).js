// =>$unwind

// => unwind aggregation stage deconstructs an array field from the input documents 
// to output a separate document for each element in the array.

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"usersOrders"
  }},{$unwind:"$usersOrders"}])

// output
[                                                                    
  {                                                                  
    _id: 1,                                                          
    username: 'Ahmed',                                               
    age: 20,                                                         
    usersOrders: { _id: 101, product: 'Laptop', userId: 1 }          
  },                                                                 
  {                                                                  
    _id: 1,                                                          
    username: 'Ahmed',                                               
    age: 20,                                                         
    usersOrders: { _id: 102, product: 'Mouse', userId: 1 }           
  },                                                                 
  {                                                                  
    _id: 2,                                                          
    username: 'Sara',                                                
    age: 25,                                                         
    usersOrders: { _id: 103, product: 'Keyboard', userId: 2 }        
  },                                                                 
  {                                                                  
    _id: 2,                                                          
    username: 'Sara',                                                
    age: 25,                                                         
    usersOrders: { _id: 104, product: 'Screen', userId: 2 }          
  }                                                                  
]                                                                    

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }},
  {$unwind:"$userOrders"},
  {$group:{_id:"$username",productsOrder:{$push:"$userOrders.product"}}}
])

// output
[
  { _id: 'Ahmed', productsOrder: [ 'Laptop', 'Mouse' ] },
  { _id: 'Sara', productsOrder: [ 'Keyboard', 'Screen' ] }
]

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }},
  {$group:{_id:"$username",productsOrder:{$push:"$userOrders.product"}}}
])

// output
[
  { _id: 'Sara', productsOrder: [ [ 'Keyboard', 'Screen' ] ] },
  { _id: 'Ahmed', productsOrder: [ [ 'Laptop', 'Mouse' ] ] }
]

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }},
  {$project:{_id:0,productsOrder:"$userOrders.product",username:1}}])

// output
[                                                                 
  { username: 'Ahmed', productsOrder: [ 'Laptop', 'Mouse' ] },    
  { username: 'Sara', productsOrder: [ 'Keyboard', 'Screen' ] }   
]                                                                 

=> db.users.aggregate([
  {$lookup:{
    from:"orders2",
    localField:"_id",
    foreignField:"userId",
    as:"userOrders"
  }
  },{$unwind:"$userOrders"},{$project:{_id:0,username:1,product:"$userOrders.product"}}
])

// output
[                                            
  { username: 'Ahmed', product: 'Laptop' },  
  { username: 'Ahmed', product: 'Mouse' },   
  { username: 'Sara', product: 'Keyboard' }, 
  { username: 'Sara', product: 'Screen' }    
]                                            

=> db.users.aggregate([{$lookup:{from:"orders2",localField:"_id",foreignField:"userId",as:"userOrders"}},{$unwind:"$userOrders"},{$group:{_id:"$username",orders:{$push:"$userOrders.product"}}}])

// output
[
  { _id: 'Ahmed', orders: [ 'Laptop', 'Mouse' ] },
  { _id: 'Sara', orders: [ 'Keyboard', 'Screen' ] }
]
