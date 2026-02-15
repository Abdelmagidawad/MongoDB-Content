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


//  --mongorestore--
// => The mongorestore program loads data from either a binary database dump created by mongodump

=> mongorestore --db shopDB dump/shopDB

// output
// 026-02-15T00:36:43.981+0200    The --db and --collection flags are deprecated for this use-case; please use --nsInclude instead, i.e. with --nsInclude=${DATABASE}.${COLLECTION}
// 2026-02-15T00:36:43.997+0200    building a list of collections to restore from dump\shopDB dir
// 2026-02-15T00:36:43.998+0200    don't know what to do with file "dump\shopDB\prelude.json", skipping...
// 2026-02-15T00:36:44.012+0200    reading metadata for shopDB.products from dump\shopDB\products.metadata.json
// 2026-02-15T00:36:44.024+0200    reading metadata for shopDB.users from dump\shopDB\users.metadata.json
// 2026-02-15T00:36:44.026+0200    restoring to existing collection shopDB.users without dropping
// ects... Error

// => Error => database repeted the same collection 
// => this remove the old database and restore database again

=> mongorestore --db shopDB dump/shopDB --dump

// output
// 2026-02-15T00:42:28.706+0200    restoring shopDB.products from dump\shopDB\products.bson
// 2026-02-15T00:42:28.718+0200    finished restoring shopDB.products (3 documents, 0 failures)
// 2026-02-15T00:42:28.719+0200    no indexes to restore for collection shopDB.products
// 2026-02-15T00:42:28.720+0200    no indexes to restore for collection shopDB.users
// 2026-02-15T00:42:28.720+0200    6 document(s) restored successfully. 0 document(s) failed to restore.

// use mongosh 
=> use shopDB
=> show collections
=> db.products.find()

// use CMD 
=> mongorestore --db myDB mybackup/myDB --drop

// output
// 2026-02-15T00:45:50.251+0200    no indexes to restore for collection myDB.stores
// 2026-02-15T00:45:50.252+0200    no indexes to restore for collection myDB.todos
// 2026-02-15T00:45:50.252+0200    no indexes to restore for collection myDB.users
// 2026-02-15T00:45:50.252+0200    no indexes to restore for collection myDB.students
// 2026-02-15T00:45:50.252+0200    17 document(s) restored successfully. 0 document(s) failed to restore.

// use mongosh 
=> use myDB
=> show collections
=> db.users.find()

// use mongosh 
=> mongorestore dump/
// output => error to datadases repeted

=> mongorestore dump/ --drop

// output
// 2026-02-15T00:51:29.144+0200    236391 document(s) restored successfully. 
// 0 document(s) failed to restore.

//
=> use schoolDB 
=> show collections
=> db.students.find()

=> mongoexport --db schoolDB --collection students --query "{\"age\":{\"$gt\":21}}"

// output
// 2026-02-15T16:09:43.661+0200    connected to: mongodb://localhost/
// 2026-02-15T16:09:43.766+0200    exported 3 records

=> mongoexport --db schoolDB --collection students --type csv --fields name,age,division --out students.csv

// output
// 2026-02-15T21:10:40.954+0200    connected to: mongodb://localhost/
// 2026-02-15T21:10:41.220+0200    exported 4 records

=> mongoimport --db schoolDB --collection students --file students.json --drop

// output
// 2026-02-15T21:17:22.359+0200    connected to: mongodb://localhost/
// 2026-02-15T21:17:22.361+0200    dropping: schoolDB.students
// 2026-02-15T21:17:22.623+0200    3 document(s) imported successfully. 0 document(s) failed to import.

=> mongoimport --db schoolDB --collections students --type csv --headerline --file students.csv --drop

// output
// 2026-02-15T21:21:05.001+0200    connected to: mongodb://localhost/
// 2026-02-15T21:21:05.006+0200    dropping: schoolDB.students
// 2026-02-15T21:21:05.192+0200    4 document(s) imported successfully. 0 document(s) failed to import.

=> mongoexport --db shopDB --collection products --fields name,price --out products.json

// output
// 2026-02-15T21:26:13.158+0200    connected to: mongodb://localhost/
// 2026-02-15T21:26:13.162+0200    exported 3 records

=> mongoimport --db shopDB --collection products --file products.json --drop

// output
// 2026-02-15T21:28:39.026+0200    connected to: mongodb://localhost/
// 2026-02-15T21:28:39.028+0200    dropping: shopDB.products
// 2026-02-15T21:28:39.141+0200    3 document(s) imported successfully. 0 document(s) failed to import.

=> mongodump --db myDB

// output
// 2026-02-15T21:30:07.278+0200    writing myDB.users to dump\myDB\users.bson
// 2026-02-15T21:30:07.284+0200    writing myDB.students to dump\myDB\students.bson
// 2026-02-15T21:30:07.285+0200    writing myDB.stores to dump\myDB\stores.bson
// 2026-02-15T21:30:07.287+0200    writing myDB.todos to dump\myDB\todos.bson
// 2026-02-15T21:30:07.319+0200    done dumping myDB.users (9 documents)
// 2026-02-15T21:30:07.348+0200    done dumping myDB.students (4 documents)
// 2026-02-15T21:30:07.364+0200    done dumping myDB.todos (2 documents)
// 2026-02-15T21:30:07.366+0200    done dumping myDB.stores (2 documents)

=> mongodump --db shopDB --out mybackup

// output
// 2026-02-15T21:33:24.520+0200    writing shopDB.users to mybackup\shopDB\users.bson
// 2026-02-15T21:33:24.522+0200    writing shopDB.products to mybackup\shopDB\products.bson
// 2026-02-15T21:33:24.525+0200    done dumping shopDB.users (3 documents)
// 2026-02-15T21:33:24.530+0200    done dumping shopDB.products (3 documents)

=> mongodump

// output
// 2026-02-15T21:33:24.520+0200    writing shopDB.users to mybackup\shopDB\users.bson
// 2026-02-15T21:33:24.522+0200    writing shopDB.products to mybackup\shopDB\products.bson
// ects .......

=> mongorestore --db shopDB mybackup/shopDB --drop

// output
// 2026-02-15T21:37:52.725+0200    6 document(s) restored successfully. 0 document(s) failed to restore.

=> mongorestore dump/ --drop

// output
// 2026-02-15T21:40:43.445+0200    236391 document(s) restored successfully. 0 document(s) failed to restore.

