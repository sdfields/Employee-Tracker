const connection = require('./config/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

function track() {
    console.log('Welcome to Employee Tracker!')

    inquirer.prompt([
        {
        type: 'list',
        name: 'userSelect',
        message: 'Please select from the options below:',
        choices: ['Add Employee', 'View Employees', 'Add Role', 'View Roles', 'Update Role', 'Add Department', 'View Departments']
        },
    ])
    .then((choice) => {
        const userSelect = choice
        switch (userSelect) {
        case 'Add Employee':
            addEmployee()
            break;
        case 'View Employees':
            viewEmployees()
            break;
        case 'Add Role'
            addRole()
            break;
        case 'View Roles'
            addRole()
            break;
        case 'Update Role'
            addRole()
            break;
        case 'Add Deparment'
            addRole()
            break;
        case 'View Departments'
            addRole()
            break;
        }
    })
}

track();

addEmployee() {
    console.log('Employee Added!')
}