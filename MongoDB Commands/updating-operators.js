// -----Updating Operators---------
// $set 
// $unset 
// $push
// $each
// $pop
// $pull
// $inc

// $set => to add field if not exist a document  or update this field if exist a document
=> db.users.updateOne({},{$set:{likes:20}}) 
=> db.users.updateOne({},{$set:{likes:10}})

// $unset => (to get any value like 1,true,"",0) to remove field from document
=> db.users.updateOne({},{$unset:{likes:1}})

// $push => to add element to array
=> db.users.updateOne({},{$push:{tags:"express.js"}})
=> db.users.findOne()

=> db.users.updateOne({},{$push:{tags:["css","bootStrap"]}}) //to push this elements as a array
=> db.users.findOne()

=> db.users.updateOne({},{$push:{scores:80}})
=> db.users.findOne()

// $each => to add array of elements to array
=> db.users.updateOne({},{$push:{tags:{$each:["css","bootstrap"]}}})
=> db.users.findOne()

=> db.users.updateOne({},{$push:{scores:{$each:[20,40]}}})
=> db.users.findOne()

// $pop => to remove one element from array
=> db.users.updateOne({},{$pop:{scores:1}})
=> db.users.findOne()

=> db.users.updateOne({},{$pop:{scores:-1}})
=> db.users.findOne()

=> db.users.updateOne({},{$pop:{tags:1}})
=> db.users.findOne()

=> db.users.updateOne({},{$pop:{tags:-1}})
=> db.users.findOne()

// $pull => The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
// Syntax => { $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }

=> db.stores.insertMany( [
   {
      _id: 1,
      fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
      vegetables: [ "carrots", "celery", "squash", "carrots" ]
   },
   {
      _id: 2,
      fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
      vegetables: [ "broccoli", "zucchini", "carrots", "onions" ]
   }
] )

=> db.stores.find()

=> db.stores.updateMany({},{$pull:{fruits:{$in:["apples","oranges"]},vegetables:"carrots"}})
=> db.stores.find()

=> db.stores.updateMany({},{$pull:{fruits:"bananas"}})
=> db.stores.find()

=> db.stores.updateOne({},{$set:{votes: [ 3, 5, 6, 7, 7, 8 ]}})
=> db.stores.updateOne({_id:2},{$set:{votes: [ 10, 50, 30, 90]}})
=> db.stores.find()

=> db.stores.updateMany({},{$pull:{votes:{$gt:6}}})
=> db.stores.find()

=> db.stores.updateMany({},{$pull:{votes:{$gt:5}}})
db.users.findOne()

=> db.users.updateOne({},{$pull:{tags:{$in:["css","bootstrap"]}}})
db.users.findOne()

// $inc => to increase element value
=>  db.users.updateOne({},{$set:{age:20}})
=> db.users.findOne()

=> db.users.updateOne({},{$inc:{age:10}})
=> db.users.findOne()

=> db.users.updateOne({},{$inc:{age:-15}})
=> db.users.findOne()

=> db.users.updateOne(
  { _id: 1 },
  {
    $set: { city: "Giza" },
    $inc: { loginCount: 1 },
    $push: {
      skills: {
        $each: ["Docker", "Redis"]
      }
    },
    $pull: { scores: { $lt: 50 } }
  }
)
=> db.users.findOne()
