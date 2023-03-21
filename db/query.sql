/* List of example query for reference */

/* Add Employee */

INSERT INTO employees SET ?

/* View Employees */

SELECT * FROM employees;

/* Add Role */

INSERT INTO roles (title, salary, department_id)

/* View Roles */

SELECT * FROM roles;

/* Update Role */

UPDATE employees SET employees.role_id = ? WHERE employees.id = ?

/* Add Department */

INSERT INTO departments SET ?

/* View Departments */

SELECT * FROM departments;