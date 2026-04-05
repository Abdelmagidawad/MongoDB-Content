// ✍️ Task 4 => mongoimport

// 1. Modify the CSV file (add a new user)

// 2. Import the data back
// 👉 Try:
// Default insert
// Upsert using a unique field (e.g., name or email)

//  *-* Solve Task 4 *-*

// insert this user data => Migo,25,Cairo
=> mongoimport --db backupPracticeDB --collection users --type csv --headerline --file users.csv --drop

// output
// 2026-04-05T18:08:43.125+0200    connected to: mongodb://localhost/
// 2026-04-05T18:08:43.127+0200    dropping: backupPracticeDB.users
// 2026-04-05T18:08:43.325+0200    3 document(s) imported successfully. 0 document(s) failed to import.

=> db.users.find()

// output
[
  {
    _id: ObjectId('69d2890bdc5695308253a0de'),
    name: 'Sara',
    age: 30,
    city: 'Alex'
  },
  {
    _id: ObjectId('69d2890bdc5695308253a0df'),
    name: 'Migo',
    age: 25,
    city: 'Cairo'
  },
  {
    _id: ObjectId('69d2890bdc5695308253a0e0'),
    name: 'Ahmed',
    age: 25,
    city: 'Cairo'
  }
]

=> mongoimport --db backupPracticeDB --collection users --type csv --headerline --file users.csv --mode upsert --upsertFields name

// output
// 2026-04-05T18:12:32.532+0200    connected to: mongodb://localhost/
// 2026-04-05T18:12:32.634+0200    3 document(s) imported successfully. 0 document(s) failed to import.
