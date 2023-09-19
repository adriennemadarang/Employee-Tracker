DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;

USE work_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INT NOT NULL, 
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL, 
    role_id INT NOT NULL, 
    manager_id INT
);