-- Departments

INSERT INTO departments (id, dep_name) VALUES (1, 'Rhythm');
INSERT INTO departments (id, dep_name) VALUES (2, 'Horns');
INSERT INTO departments (id, dep_name) VALUES (3, 'Vocals');

INSERT INTO roles (title, salary, department_id) VALUES ('Bass', 100, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Drums', 200, 1);

INSERT INTO roles (title, salary, department_id) VALUES ('Trumpet', 125, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Saxophone', 150, 2);

INSERT INTO roles (title, salary, department_id) VALUES ('Lead', 175, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Backup', 225, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Paul', 'McCartney', 1, NULL);
