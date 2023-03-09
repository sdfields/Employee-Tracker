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
            break;
        }
    })
}

function addEmployee() {
    console.log('Employee Added!');
    track();
};

function viewEmployees() {
    console.log('View Employees!');
    track();
};

function addRole() {
    console.log('Role Added!');
    track();
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
    console.log('View Departments!');
    track();
};

track();