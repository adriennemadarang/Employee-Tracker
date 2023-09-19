USE work_db;

INSERT INTO department (name)
VALUES ("Engineer"),
    ("Legal"),
    ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 125000, 1),
    ("Lawyer", 150000, 2),
    ("Software Engineer", 130000, 1),
    ("Financial Advisor", 110000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, NULL),
        ("Mike", "Chan", 2, NULL),
        ("Ashley", "Rodgriguez", 3, 1),
        ("Tom", "Allen", 3, NULL),
        ("Malia", "Brown", 2, NULL),
        ("Kevin", "Tupik", 1, NULL),
        ("Kunal", "Singh", 2, NULL),
        ("Sarah", "Lourd", 3, NULL);
