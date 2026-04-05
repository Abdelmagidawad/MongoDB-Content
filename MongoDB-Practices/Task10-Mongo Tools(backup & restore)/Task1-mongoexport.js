// ✍️ Task 1 => mongoexport

// 1. Export the users collection to a JSON file
// 2. Export the users collection to a CSV file
// 3. In the CSV file:
//    Include only these fields: name, age, city

//  *-* Solve Task 1 *-*

// Use CMD to Run Command mongoBackup,restore 

=> mongoexport --db backupPracticeDB --collection users --out users.json

// output
// 2026-04-05T16:57:45.893+0200    connected to: mongodb://localhost/
// 2026-04-05T16:57:45.910+0200    exported 2 records

=> mongoexport --db backupPracticeDB --collection users --type csv --fields name,age,city --out users.csv

// output
// 2026-04-05T17:00:05.217+0200    connected to: mongodb://localhost/
// 2026-04-05T17:00:05.222+0200    exported 2 records


