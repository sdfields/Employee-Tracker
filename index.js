// Variables for necessary dependencies

const connection = require('./config/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Main function to run the tracker

function track() {
    // Welcome Message
    console.log('Welcome to Employee Tracker!')
    // Using Inquirer to prompt user selection
    inquirer.prompt([
        {
        type: 'list',
        name: 'userSelect',
        message: 'Please select from the options below:',
        choices: ['Add Employee', 'View Employees', 'Add Role', 'View Roles', 'Update Role', 'Add Department', 'View Departments']
        },
    ])
    .then((choice) => {
        const {userSelect} = choice
        switch (userSelect) {
        case 'Add Employee':
            addEmployee()
            break;
        case 'View Employees':
            viewEmployees()
            break;
        case 'Add Role':
            addRole()
            break;
        case 'View Roles':
            viewRoles()
            break;
        case 'Update Role':
            updateRole()
            break;
        case 'Add Department':
            addDepartment()
            break;
        case 'View Departments':
            viewDepartments()
            .then(function ([res]) {
                console.table(res)
                track();
            }) .catch(function (err) {
                console.log(err);
            })
            break;
        }
    })
}

function addEmployee() {
    console.log('Employee Added!')
};

function viewEmployees() {
    connection.query('SELECT * FROM employees', function (err, res) {
        if (err) {
            console.log(err)
        } 
        console.table(res)
        track();
    });
};

function addRole() {
    viewDepartments()
    .then(function ([res]) {
        console.log(res)
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role you are adding?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role you are adding?'
            },
            {   
                type: 'list',
                name: 'deptSelect',
                message: 'Please select from the options below:',
                choices: res.map(function (dept) {
                    return {
                        value: dept.id,
                        name: dept.department_name,
                    }
                }),
            },
        ]).then( function (answers) {
            connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.deptSelect], function (err) {
                if (err) {
                console.log(err)
                } else {
                track();
                }
            }) 
        })
    }) .catch(function (err) {
        console.log(err);
    })
};

function viewRoles() {
    console.log('View Roles!');
    track();
};

function updateRole() {
    console.log('Role Updated!');
    track();
};

function addDepartment() {
    console.log('Department Added!');
    track();
};

function viewDepartments() {
    return connection.promise().query('SELECT * FROM departments')
};

track();