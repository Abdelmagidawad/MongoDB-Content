// -------Aggregation Pipelines--------

// => MongoDB's aggregation pipeline is a framework for data processing that passes documents
// through one or more stages in sequence. Each stage performs an operation, such as filtering, grouping,....

// => Some of Aggregation Operators Used

// $project

// $match

// $group

//   $avg
//   $sum
//   $max
//   $min
//   $push
//   $dateToString

// $sort

// $addFields

// $lookup

// $unwind

=> use myDB

=> db.users.find()

=> db.users.aggregate([{$project:{name:1,_id:0}}]) // to return names of users only
