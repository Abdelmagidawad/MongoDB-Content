// -----What is a cursor---------

// Cursor => A cursor points to the results of a query.
// Cursors let you iterate over database results one batch at a time

db.users.find(); // to return a cursor of resultSet

var cursor = db.users.find();
cursor; //result MongoDB Cursor

// To Use Cursor with Three Ways:-

// toArray() => to return all resultSet
db.users.find().toArray(); //to return all resultSet

// array.forEach => to return documents step by step
db.users.find().forEach((user) => {
  print(`UserName: ${user.name}`);
});

var resultCursor = db.users.find({ age: { $gt: 18 } }).forEach((user) => {
  print(`UserName: ${user.name} - Age: ${user.age}`);
});

// next() => to return one by one document
var c = db.users.find();
c.next();
c.next();
c.next();
c.next();
