// Variables for necessary dependencies

const connection = require("./config/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Main function to run the tracker

function track() {
  // Welcome Message
  console.log("Welcome to Employee Tracker!");
  // Using Inquirer to prompt user selection
  inquirer
    .prompt([
      {
        type: "list",
        name: "userSelect",
        message: "Please select from the options below:",
        choices: [
          "Add Employee",
          "View Employees",
          "Add Role",
          "View Roles",
          "Update Role",
          "Add Department",
          "View Departments",
        ],
      },
    ])
    .then((choice) => {
      const { userSelect } = choice;
      switch (userSelect) {
        case "Add Employee":
          addEmployee();
          break;
        case "View Employees":
          viewEmployees()
            .then(function ([res]) {
              console.table(res);
              track();
            })
            .catch(function (err) {
              console.log(err);
            });
          break;
        case "Add Role":
          addRole();
          break;
        case "View Roles":
          viewRoles()
            .then(function ([res]) {
              console.table(res);
              track();
            })
            .catch(function (err) {
              console.log(err);
            });
          break;
        case "Update Role":
          updateRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "View Departments":
          viewDepartments()
            .then(function ([res]) {
              console.table(res);
              track();
            })
            .catch(function (err) {
              console.log(err);
            });
          break;
      }
    });
}

// Finish this function

function addEmployee() {
  viewDepartments()
  .then(function ([res]) {
    console.log(res);
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the first name of the employee you are adding?",
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the last name of the employee you are adding?",
        },
        {
          type: "list",
          name: "role_id",
          message: "Please select the employees role below:",
          choices: res.map(function (role) {
            return {
              value: role.id,
              name: role.title,
            };
          }),
        },
        {
          type: "list",
          name: "manager_id",
          message: "Please select the employees role below:",
          choices: res.map(function (role) {
            return {
              value: role.id,
              name: role.title,
            };
          }),
        },
      ])
      .then(function (answers) {
        connection.query(
          "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
          [answers.title, answers.salary, answers.deptSelect],
          function (err) {
            if (err) {
              console.log(err);
            } else {
              track();
            }
          }
        );
      });
  })
  .catch(function (err) {
    console.log(err);
  });
}

function viewEmployees() {
  return connection.promise().query("SELECT * FROM employees")
  };


function addRole() {
  viewDepartments()
    .then(function ([res]) {
      console.log(res);
      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of the role you are adding?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the role you are adding?",
          },
          {
            type: "list",
            name: "deptSelect",
            message: "Please select the department from the options below:",
            choices: res.map(function (dept) {
              return {
                value: dept.id,
                name: dept.department_name,
              };
            }),
          },
        ])
        .then(function (answers) {
          connection.query(
            "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
            [answers.title, answers.salary, answers.deptSelect],
            function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log('Role added!');
                track();
              }
            }
          );
        });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function viewRoles() {
  return connection.promise().query("SELECT * FROM roles");
}

// Finish this function

function updateRole() {
  console.log("Role Updated!");
  track();
}

// Finish this function

function addDepartment() {
  viewDepartments()
    .then(function ([res]) {
      console.log(res);
      inquirer
        .prompt([
          {
            type: "input",
            name: "department_name",
            message: "What is the name of the department you are adding?",
            choices: res.map(function (dept) {
              return {
                value: dept.id,
                name: dept.department_name,
              };
            }),
          },
        ])
        .then(function (answers) {
          connection.query(
            "INSERT INTO departments (department_name) VALUES (?)",
            [answers.department_name],
            function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log('Department added!');
                track();
              }
            }
          );
        });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function viewDepartments() {
  return connection.promise().query("SELECT * FROM departments");
}

track();
