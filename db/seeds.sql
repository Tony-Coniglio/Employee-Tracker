-- Departments

INSERT INTO departments (id, dep_name) VALUES (1, 'Rhythm');
INSERT INTO departments (id, dep_name) VALUES (2, 'Horns');
INSERT INTO departments (id, dep_name) VALUES (3, 'Vocals');

-- Roles
INSERT INTO roles (title, salary, department_id) VALUES ('Bass', 100, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Drums', 200, 1);

INSERT INTO roles (title, salary, department_id) VALUES ('Trumpet', 125, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Saxophone', 150, 2);

INSERT INTO roles (title, salary, department_id) VALUES ('Lead', 175, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Backup', 225, 3);

-- Employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Paul', 'McCartney', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Ringo', 'Starr', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Louis', 'Armstrong', 2, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Charlie', 'Parker', 2, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mick', 'Jagger', 3, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('George', 'Harrison', 3, NULL);
