// -----Database Administration (MongoDB)---------

// Giving a user permissions on a specific database to MongoDB

// Syntax => 
=>db.createUser({
    user: "<name>",
    pwd: passwordPrompt(),      // Or  "<cleartext password>"
    roles: [
      { role: "<role-name>", db: "<database-name>" } || "<role>",
      ...
    ]
})

//
=> use admin
=> db.createUser({
    user:"test1",
    pwd:passwordPrompt(),
    roles:[
        {role:"readWrite",db:"admin"},
    ]
})

//
=> use shopDB
=> db.createUser({
    user:"appUser",
    pwd:"app123",
    roles:[
        {role:"read",db:"shopDB"}
    ]
})

=> mongosh -u appUser -p app123 shopDB

//
=> use  reportsDB
=> db.createUser({
    user:"reportUser",
    pwd:passwordPrompt(),
    roles:[
        {role:"readWrite",db:"reportsDB"}
    ]
})

=> mongosh -u reportuser -p 123 reportsDB
