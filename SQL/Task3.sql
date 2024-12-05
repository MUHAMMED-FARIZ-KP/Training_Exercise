CREATE DATABASE EmployeeDB
USE EmployeeDB

CREATE TABLE Employee (
	id int PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	age int NOT NULL,
	department varchar(50) NOT NULL,
	salary DECIMAL(10,2) NOT NULL

)


INSERT INTO Employee VALUES(
7,'Ramu',18,'Analyst','60000'
)

SELECT DISTINCT salary
FROM Employee
ORDER BY salary DESC
OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;

SELECT * FROM Employee

SELECT department,COUNT(*) FROM Employee GROUP BY department