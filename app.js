const mysql = require('mysql2');
const inquirer = require("inquirer");




// Prompt menu

function runEmployeeDB() {
    inquirer.prompt([
    {
    type: "list",
    message: "Please slect from the following options",
    name: "action",
    choices: [
            "View All Employees", 
            "View All Departments",
            "View All Roles",
            "View All Employees by Department",
            "View All Employees by Role",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Exit"
            ]
    }
]).then(function(answers) {
        switch (answers.action) {

            case "View All Employees":
                viewEmployees();

            case "View All Departments":
                viewDepartments();

            case "View All Roles":
                viewRoles();
                _
            case "View All Employees by Department":
                viewEmployeesByDepartment();

            case "View All Employees by Role":
                viewEmployeesByRole();

            case "Add Department":
                addDepartment();

            case "Add Role":
                addRole();

            case "Add Employee":
                addEmployee();
      
            case "Update Employee Role":
                updateEmployeeRole();

            case "Exit":
            }
    })
};

runEmployeeDB

