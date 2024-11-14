INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('HR'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Software Engineer', 70000, 1),
    ('Accountant', 60000, 2),
    ('HR Manager', 65000, 3),
    ('Marketing Specialist', 55000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, NULL),
    ('Emma', 'Jones', 3, 1),
    ('Mark', 'Taylor', 4, 2);
