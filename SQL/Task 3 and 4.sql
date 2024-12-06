
USE TrainingDB

CREATE TABLE Employee (
	id int PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	age int NOT NULL,
	department varchar(50) NOT NULL,
	salary DECIMAL(10,2) NOT NULL

)


INSERT INTO Employee VALUES
(1,'Ramu',18,'Analyst','60000'),
(2,'John',24,'Software Development','80000'),
(3,'Alex',40,'Business Development','120000'),
(4,'Carl',35,'Business Development','130000'),
(5,'Max',21,'Software Development','10000'),
(6,'Ammu',27,'Sales','70000'),
(7,'Stephen',45,'Software Development','450000'),
(8,'Irin',25,'HR','50000')


SELECT * FROM Employee


SELECT DISTINCT salary
FROM Employee
ORDER BY salary DESC
OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;



SELECT department,COUNT(*) FROM Employee GROUP BY department