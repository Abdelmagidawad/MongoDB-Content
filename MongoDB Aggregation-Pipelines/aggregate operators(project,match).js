=> use aggregates
=> db.orders.insertMany([
    {branch:"Alex",createdAt:new Date(),total:200},
    {branch:"Cairo",createdAt:new Date(),total:400},
    {branch:"Ismalia",createdAt:new Date(),total:30},
    {branch:"Alex",createdAt:new Date(),total:150},
    {branch:"Cairo",createdAt:new Date(),total:20},
    {branch:"Alex",createdAt:new Date(),total:300},
    {branch:"Cairo",createdAt:new Date(),total:90},
    {branch:"Alex",createdAt:new Date(),total:50},
    {branch:"Ismalia",createdAt:new Date(),total:400},
    {branch:"Cairo",createdAt:new Date(),total:350},
    {branch:"Cairo",createdAt:new Date(),total:120},
    {branch:"Ismalia",createdAt:new Date(),total:700},
    {branch:"Cairo",createdAt:new Date(),total:270},
    {branch:"Ismalia",createdAt:new Date(),total:80},
    {branch:"Ismalia",createdAt:new Date(),total:550},
    {branch:"Ismalia",createdAt:new Date(),total:6000},
    {branch:"Ismalia",createdAt:new Date(),total:160},
    {branch:"Ismalia",createdAt:new Date(),total:10},
])

=> db.orders.find()

//=> $project 
=> db.orders.aggregate([{$porject:{branch:1,_id:0}}]) 
=> db.orders.aggregate([{$project:{branch:1,total:1,_id:0}}])
=> db.orders.aggregate([{$project:{branch:1,_id:0}},{$match:{branch:{$ne:"Cairo"}}}])

// => $match 
=> db.orders.aggregate([{$match:{branch:{$ne:"Cairo"}}}])
=> db.orders.aggregate([{$match:{branch:{$ne:"Ismalia"}}}])
=> db.orders.aggregate([{$match:{total:{$gt:200}}},{$project:{branch:1,total:1,_id:0}}])
=> db.orders.aggregate([{$match:{total:{$gt:100}}}])
