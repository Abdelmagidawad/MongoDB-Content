// ✍️ Task 2 => mongoexport

// 1. Export only users where: city = Cairo

// 👉 Hint: use --query

//  *-* Solve Task 2 *-*

=> mongoexport --db backupPracticeDB --collection users --query="{\"city\":\"Cairo\"}" --out userCairo.json

// output
// 2026-04-05T17:15:09.678+0200    connected to: mongodb://localhost/
// 2026-04-05T17:15:09.775+0200    exported 1 record
