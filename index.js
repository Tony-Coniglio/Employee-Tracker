const mysql = require('mysql2');
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '801West5thst!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
  );

  db.connect(function(err) {
    if (err) throw err;
    runEmployeeDB();
  });



// Prompt menu

const runEmployeeDB = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Please slect from the following options",
            name: "menu",
            choices: [
                "View Employees",
                "View Departments",
                "View Roles",
                "View Employees by Department",
                "View Employees by Role",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Exit"
            ]
        }
    ]).then(selection => {
        switch (selection.menu) {
            // THESE JUST NEED TO BE VIEWED


            case "View Departments":
                viewDepartments();
                break;

            case "View Roles":
                viewRoles();
                break;

            case "View Employees":
                viewEmployees();
                break;
                _
            case "View Employees by Department":
                viewEmployeesByDepartment();
                break;

            case "View Employees by Role":
                viewEmployeesByRole();
                break;

            // THESE REQUIRE ACTION
            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                break;

            case "Exit":
                exit();
                break;
        }
    })
};

// VIEW FUNCTIONS
function viewDepartments() {
    // ** go get all info for the departments
    // mysql.query function
    db.query('SELECT * from departments', function(err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewRoles() {
    // ** go get all info for the departments
    // mysql.query function
    db.query('SELECT * from roles', function(err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewEmployees() {
    // ** go get all info for the departments
    // mysql.query function
    db.query('SELECT * from employees', function(err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewEmployeesByDepartment() {
    // ** go get all info for the departments
    // mysql.query function
    db.query('SELECT * from departments', function(err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewEmployeesByRole() {
    // ** go get all info for the departments
    // mysql.query function
    db.query('SELECT * from departments', function(err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};


// EXIT FUNCTION
function exit() {
    db.end();
}




