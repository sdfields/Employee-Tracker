/* Department Seeds */

INSERT INTO departments (department_name)
VALUES ("Finance"),
       ("Human Resources"),
       ("Operations"),
       ("Information Technology"),
       ("Research and Development");

/* Roles seeds */

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 52000, 1),
       ("Recruiter", 40000, 2),
       ("Account Manager", 50000, 3),
       ("Tech Support", 42000, 4),
       ("Researcher", 45000, 5);

/* Employees seeds */

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joan", "Finch", 1, NULL),
       ("Lachlan", "Walls", 2, 1),
       ("Julius", "Combs", 3, NULL),
       ("Darren", "Mosley", 4, 3),
       ("Poppy", "Burton", 5, NULL);