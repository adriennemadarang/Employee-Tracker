const mysql = require('mysql2');

const connection =mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "work_db",
    },
    console.log(`Welcome to the Employee Manager`)
);

connection.connect(function(err){
    if(err) throw err;
});