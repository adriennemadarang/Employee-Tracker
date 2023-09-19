const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySql username, 
        user: 'root',
        password: ' ',
        database: 'work_db'
    },
    console.log(`Connected to the database.`)
);

db.connect((err) => {
    if(err) throw err;
    mainPrompt();
})

function mainPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Add a role"]
        }
    ])

        .then((answers) => {
            if (answers.options === "View all departments") {
                viewDepartment()
            } else if (answers.options === "View all roles"){
                viewRoles()
            } else if (answers.options === "View all employees"){
                viewEmployees()
            } else if (answers.options === "Add a department"){
                addDepartment()
            } else if (answers.options === "Add a role"){
                addRole()
            } else if (answers.options === "Update an employee role"){
                updateEmployeeRole()
            }
        })

function viewDepartment() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log();
        console.table(results);
        mainPrompt();
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log();
        console.table(results);
        mainPrompt();
    });

    function viewEmployees() {
        db.quert('SELECT * FROM employee', function (err, results) {
            console.log();
            console.table(results);
            mainPrompt();
        });

function addDepartment() {
    inquirer.prompts([
        {
            type: 'input',
            name: 'addDept',
            message: 'What department name would you like to add?'
        }
    ])
    .then((answer) => {
        const sql = `INSERT INTO department (name) VALUES (?)`
        const params = [answers.addDept];
        db.query(sql, params, (err, results) => {
            console.log(err);
            db.query('SELECT * FROM department', function (err, res) {
                console.log();
                console.table(results);
                mainPrompt();
            })
        })
    })
}

async function addRole(){
    const roles = await db.promise().query('SELECT id AS value, CONCAT(name) AS name FROM department');
    const ans = await inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'addSalary',
            message: 'What salary will this role have?'
        },
        {
            type: 'list',
            name: 'deptID',
            message: 'What department will this new role be under?',
            choices: roles[0]
        }
    ])
    const 
}
    }
}
}