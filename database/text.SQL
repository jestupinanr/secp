CREATE DATABASE SEDC_DB;

USE SEDC_DB;

CREATE TABLE PERSON(
    auto_person INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    second_name VARCHAR(30),
    first_lastname VARCHAR(30),
    second_lastname VARCHAR(30),
    cedula INT(20),
    email VARCHAR(50),
    password varbinary (50) NOT NULL,
    username VARCHAR(30),
    image VARCHAR(120),
    user_modific VARCHAR(30),
    date_row TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE PERSON;