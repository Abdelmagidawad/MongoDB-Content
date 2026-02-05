// -----Find Method---------

=>  pretty()
=>  count()
=>  limit()
=>  skip()
=>  sort()

=>  pretty()
=> db.users.find().pretty()

=>  count() // => to return the number of documents inside the collection
=> db.users.find().count() //output: 9
=> db.todos.find().count() //output: 2

=>  limit()
=> db.users.find().limit(3)

=>  skip()
=> db.users.find().skip(2)
=> db.users.find().skip(2).limit(2)

=>  sort()
=>db.users.find().sort({age:1}) //ascending
=>db.users.find().sort({age:-1}) //descending
