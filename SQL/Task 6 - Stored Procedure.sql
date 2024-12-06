CREATE TABLE SignUp (
    firstName NVARCHAR(50) NOT NULL 
        CHECK (LEN(FirstName) >= 3 AND firstName NOT LIKE '%[0-9!@#$%^&*()]%'),
    lastName NVARCHAR(50) NOT NULL 
        CHECK (LEN(LastName) >= 3 AND lastName NOT LIKE '%[0-9!@#$%^&*()]%'),
    dateOfBirth DATE NOT NULL,
    age INT NOT NULL 
        CHECK (age >= 18),
    gender NVARCHAR(10) NOT NULL 
        CHECK (gender IN ('Male', 'Female', 'Other')),
    phoneNumber NVARCHAR(15) NOT NULL 
        CHECK (phoneNumber LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    emailAddress NVARCHAR(100) NOT NULL PRIMARY KEY
        CHECK (emailAddress LIKE '%_@__%.__%'),
    address NVARCHAR(200) NOT NULL,
    state NVARCHAR(50) NOT NULL,
    city NVARCHAR(50) NOT NULL,
    username NVARCHAR(50) NOT NULL UNIQUE 
        CHECK (username NOT LIKE '%[^a-zA-Z0-9]%'),
    password NVARCHAR(100) NOT NULL 
        CHECK (
            LEN(password) >= 8 AND 
            password LIKE '%[A-Z]%' AND 
            password LIKE '%[a-z]%' AND 
            password LIKE '%[0-9]%' AND 
            password LIKE '%[!@#$%^&*()]%'
        )
);

CREATE TABLE SignIn (
    emailAddress NVARCHAR(100) NOT NULL PRIMARY KEY
        CHECK (emailAddress LIKE '%_@__%.__%'),
    password NVARCHAR(100) NOT NULL,
    FOREIGN KEY (emailAddress) REFERENCES SignUp(emailAddress)
);

SELECT * FROM SignIn
SELECT * FROM SignUp

INSERT INTO SignUp (firstName, lastName, dateOfBirth, age, gender, phoneNumber, emailAddress, address, state, city, username, password)
VALUES 
('John', 'Doe', '1990-05-15', 33, 'Male', '9876543210', 'johndoe@gmail.com', '123 Main St', 'Kerala', 'Kochi', 'johnd', 'P@ssw0rd!2023'),
('Sam', 'sss', '1988-11-22', 35, 'Male', '8765432109', 'sam@gmail.com', '456 Park Ave', 'Karnataka', 'Bangalore', 'janes', 'Secur3P@ss!24')

INSERT INTO SignIn (emailAddress, password)
VALUES 
('johndoe@gmail.com', 'P@ssw0rd!2023'),
('sam@gmail.com', 'Secur3P@ss!24')




--STORED PROCEDURE-	CREATE
CREATE PROCEDURE AddUser
    @firstName NVARCHAR(50),
    @lastName NVARCHAR(50),
    @dateOfBirth DATE,
    @age INT,
    @gender NVARCHAR(10),
    @phoneNumber NVARCHAR(15),
    @emailAddress NVARCHAR(100),
    @address NVARCHAR(200),
    @state NVARCHAR(50),
    @city NVARCHAR(50),
    @username NVARCHAR(50),
    @password NVARCHAR(100)
AS
BEGIN
    BEGIN TRY
        INSERT INTO SignUp (firstName, lastName, dateOfBirth, age, gender, phoneNumber, emailAddress, address, state, city, username, password)
        VALUES (@firstName, @lastName, @dateOfBirth, @age, @gender, @phoneNumber, @emailAddress, @address, @state, @city, @username, @password);
        
        INSERT INTO SignIn (emailAddress, password)
        VALUES (@emailAddress, @password);
        
        PRINT 'User added successfully.';
    END TRY
    BEGIN CATCH
        PRINT 'Error occurred: ' + ERROR_MESSAGE();
    END CATCH
END

--STORED PROCEDURE-READ
CREATE PROCEDURE GetAllUsers
AS
BEGIN
    SELECT * FROM SignUp;
END

--STORED PROCEDURE-READ a single user by email
CREATE PROCEDURE GetUserByEmail
    @Email NVARCHAR(100)
AS
BEGIN
    SELECT * FROM SignUp WHERE emailAddress = @Email;
END

--STORED PROCEDURE Update
CREATE PROCEDURE UpdateUser
    @emailAddress NVARCHAR(100),
    @phoneNumber NVARCHAR(15),
    @address NVARCHAR(200),
    @state NVARCHAR(50),
    @city NVARCHAR(50)
AS
BEGIN
    BEGIN TRY
        UPDATE SignUp
        SET phoneNumber = @phoneNumber,
            address = @address,
            state = @state,
            city = @city
        WHERE emailAddress = @emailAddress;

        PRINT 'User updated successfully.';
    END TRY
    BEGIN CATCH
        PRINT 'Error occurred: ' + ERROR_MESSAGE();
    END CATCH
END

--STORED PROCEDURE DELETE
CREATE PROCEDURE DeleteUser
    @Email NVARCHAR(100)
AS
BEGIN
    BEGIN TRY
        DELETE FROM SignIn WHERE emailAddress = @Email;
        DELETE FROM SignUp WHERE emailAddress = @Email;

        PRINT 'User deleted successfully.';
    END TRY
    BEGIN CATCH
        PRINT 'Error occurred: ' + ERROR_MESSAGE();
    END CATCH
END


EXEC AddUser 
  'Alice', 'Wonder', '1995-04-01', 29, 'Female', '9123456789', 
  'alice@gmail.com', '789 Elm St', 'Maharashtra', 'Mumbai', 
  'alicew', 'Str0ngP@ss!5678';

EXEC GetAllUsers
EXEC GetUserByEmail 'johndoe@gmail.com';
EXEC UpdateUser 'johndoe@gmail.com', '9001234567', 'AAA Street', 'Kerala', 'malappuram';
EXEC DeleteUser 'johndoe@gmail.com';