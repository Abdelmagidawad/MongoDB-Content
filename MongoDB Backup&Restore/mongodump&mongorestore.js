// ------- Mongodump & Mongorestore --------

//  --mongodump--

// => mongodump is a utility that creates a binary export of a database's contents. 

// use CMD

=> mongdump --db shopDB

// output
// 2026-02-14T23:39:08.161+0200    writing shopDB.products to dump\shopDB\products.bson
// 2026-02-14T23:39:08.162+0200    writing shopDB.users to dump\shopDB\users.bson
// 2026-02-14T23:39:08.310+0200    done dumping shopDB.users (3 documents)
// 2026-02-14T23:39:08.310+0200    done dumping shopDB.products (3 documents)

=> mongodump --db myBD --out "mybackup"

// output
// 2026-02-14T23:48:29.290+0200    writing myDB.users to mybackup\myDB\users.bson
// 2026-02-14T23:48:29.295+0200    writing myDB.students to mybackup\myDB\students.bson
// 2026-02-14T23:48:29.296+0200    writing myDB.todos to mybackup\myDB\todos.bson
// 2026-02-14T23:48:29.297+0200    writing myDB.stores to mybackup\myDB\stores.bson
// 2026-02-14T23:48:29.641+0200    done dumping myDB.users (9 documents)
// 2026-02-14T23:48:29.707+0200    done dumping myDB.students (4 documents)
// 2026-02-14T23:48:29.717+0200    done dumping myDB.stores (2 documents)
// 2026-02-14T23:48:29.809+0200    done dumping myDB.todos (2 documents)

=> mongodump  //to dump all databases from Server

// output 
// 2026-02-14T23:51:56.369+0200    writing admin.system.users to dump\admin\system.users.bson
// 2026-02-14T23:51:56.514+0200    done dumping admin.system.users (5 documents)
// 2026-02-14T23:51:56.515+0200    writing admin.system.version to dump\admin\system.version.bson
// 2026-02-14T23:51:56.517+0200    done dumping admin.system.version (1 document)
// 2026-02-14T23:51:56.518+0200    writing indexes.users to dump\indexes\users.bson
// ects

