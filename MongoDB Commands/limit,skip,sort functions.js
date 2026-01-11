// -Limit ,Skip ,Sort Functions-

// limit() => to show a part of result set of find() and to count result set to positive number
// Syntax => db.collection.find().limit(<positive number>)

=>db.books.find().limit(2) // to return a first two result set


// skip() => to skip a number of result set and return all above
// Syntax => db.collection.find().skip(<offset number>)

=>db.books.find().skip(2)


// sort() => to sort all result set with specified field
// Syntax => db.collection.find().sort({field:1=> sort ascending,-1=> sort descending})

=>db.books.find().sort({Pages:1}) // to sort documents books ascending
=>db.books.find().sort({Pages:-1}) // to sort documents books descending
