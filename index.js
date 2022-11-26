const mysql = require('mysql2');
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // insert password here
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
);

db.connect(function (err) {
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
    db.query('SELECT * from departments', function (err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewRoles() {
    db.query('SELECT * from roles', function (err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

function viewEmployees() {
    db.query('SELECT * from employees', function (err, res) {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        runEmployeeDB()
    })
};

// ACTION FUNCTIONS

const addDepartment = () => {
    inquirer.prompt([
        {
            name: `name`,
            type: `input`,
            message: `Please enter department name`
        }
    ])

        .then((answers) => {
            const sql = `INSERT INTO departments (dep_name) VALUES (?)`;
            const userInput = [answers.name];
            db.query(sql, userInput, function (err, res) {
                if (err) throw err;
                // console.log(res);

            });
            runEmployeeDB();
        });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: `first_name`,
            type: `input`,
            message: `Please enter first name`,
        },
        {
            name: `last_name`,
            type: `input`,
            message: `Please enter last name`,
        },
        {
            name: `role_id`,
            type: `input`,
            message: `Please enter roll id`,
        },
        {
            name: `manager_id`,
            type: `input`,
            message: `Please enter manager id`,
        },
    ])
        .then((answers) => {
            console.log(answers);
            const sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
            const userInput = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

            db.query(sql, userInput, function (err, res) {
                if (err) throw err;
                console.log(res);
                runEmployeeDB();
            });
        });
};


const addRole = () => {
    inquirer.prompt([
        {
            name: `title`,
            type: `input`,
            message: `Please enter job title`
        },
        {
            name: `salary`,
            type: `input`,
            message: `Please enter job salary`
        },
        {
            name: `department_id`,
            type: `input`,
            message: `Please enter department id`
        },
    ])
        .then((answers) => {
            console.log(answers);
            const userInput = "INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)"
            const params = [answers.title, answers.salary, answers.department_id]

            db.query(userInput, params, function (err, results) {
                if (err) throw err;
                console.log(results);
                runEmployeeDB();
            });
        });
};

// EXIT FUNCTION
function exit() {
    db.end();
}




