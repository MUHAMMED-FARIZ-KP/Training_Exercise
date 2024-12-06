CREATE TABLE Customers (
    customerID INT PRIMARY KEY,
    customerName VARCHAR(50),
    city VARCHAR(50)
);
CREATE TABLE Orders (
    orderID INT PRIMARY KEY,
    customerID INT,
    orderAmount DECIMAL(10, 2),
    orderDate DATE
);

INSERT INTO Customers (customerID, customerName, city) VALUES
(1, 'John Doe', 'New York'),
(2, 'Jane Smith', 'Los Angeles'),
(3, 'Michael Brown', 'Chicago'),
(4, 'Emily Davis', 'Houston'),
(5, 'Sarah Lee', 'New York'),
(6, 'Tom Wilson', 'Los Angeles');

INSERT INTO Orders (orderID, customerID, orderAmount, orderDate) VALUES
(101, 1, 250.00, '2024-01-15'),
(102, 2, 450.00, '2024-02-20'),
(103, 1, 150.00, '2024-03-10'),
(104, 4, 300.00, '2024-04-25'),
(105, 5, 450.00, '2024-05-07');
--INNER JOIN
SELECT Customers.customerID, Customers.customerName, Orders.orderID, Orders.orderAmount
FROM Customers
INNER JOIN Orders ON Customers.customerID = Orders.customerID;

--LEFT JOIN
SELECT Customers.customerID, Customers.customerName, Orders.orderID, Orders.orderAmount
FROM Customers
LEFT JOIN Orders ON Customers.customerID = Orders.customerID;

--RIGHT JOIN
SELECT Customers.customerID, Customers.customerName, Orders.orderID, Orders.orderAmount
FROM Customers
RIGHT JOIN Orders ON Customers.customerID = Orders.customerID;

--FULL OUTER JOIN
SELECT Customers.customerID, Customers.customerName, Orders.orderID, Orders.orderAmount
FROM Customers
FULL OUTER JOIN Orders ON Customers.customerID = Orders.customerID;

--CROSS JOIN
SELECT Customers.customerID, Customers.customerName, Orders.orderID, Orders.orderAmount
FROM Customers
CROSS JOIN Orders;

--SELF JOIN
SELECT A.customerID AS customer1, A.customerName AS customerName1, 
       B.customerID AS customer2, B.customerName AS customerName2
FROM Customers A
INNER JOIN Customers B ON A.city = B.city AND A.customerID <> B.customerID;