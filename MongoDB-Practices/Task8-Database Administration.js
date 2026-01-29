// ✍️ Task 8 => Database Administration

// 1.Create a database user with:
//   username: shopUser
//   password: 12345
//   role: readWrite on shopDB
// 2.List all users in the database
// 3.Show the currently authenticated user

//  *-* Solve Task 8 *-*

=> use shopDB
=> db.createUser({
  user:"shopUser",
  pwd: passwordPrompt(),
  roles:[
    {role:"readWrite",db:"shopDB"}
  ]
})
=> mongosh -u shopUser -p 12345 shopDB

=> show users 

=> db.runCommand({ connectionStatus: 1 })
=> authInfo.authenticatedUsers
