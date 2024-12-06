CREATE TABLE StudentAdmission (
    admissionID INT IDENTITY(1,1) PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    dateOfBirth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
    email VARCHAR(100) UNIQUE NOT NULL CHECK (email LIKE '%_@__%.__%'),
    phoneNumber VARCHAR(15) NOT NULL CHECK (phoneNumber LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    address VARCHAR(200) NOT NULL,
    course VARCHAR(50) NOT NULL
);

CREATE PROCEDURE ManageStudentAdmission
    @operation VARCHAR(10), -- 'CREATE', 'READ', 'UPDATE', 'DELETE'
    @admissionID INT = NULL, -- Required for 'READ', 'UPDATE', and 'DELETE'
    @firstName VARCHAR(50) = NULL, -- Required for 'CREATE' and 'UPDATE'
    @lastName VARCHAR(50) = NULL,
    @dateOfBirth DATE = NULL,
    @gender VARCHAR(10) = NULL,
    @email VARCHAR(100) = NULL,
    @phoneNumber VARCHAR(15) = NULL,
    @address VARCHAR(200) = NULL,
    @course VARCHAR(50) = NULL
AS
BEGIN
    BEGIN TRY
        IF @operation = 'CREATE'
        BEGIN
            INSERT INTO StudentAdmission (firstName, lastName, dateOfBirth, gender, email, phoneNumber, address, course)
            VALUES (@firstName, @lastName, @dateOfBirth, @gender, @email, @phoneNumber, @address, @course);

            PRINT 'Student admission record created successfully.';
        END
        ELSE IF @operation = 'READ'
        BEGIN
            IF @admissionID IS NULL
            BEGIN
                SELECT * FROM StudentAdmission;
            END
            ELSE
            BEGIN
                SELECT * FROM StudentAdmission WHERE admissionID = @admissionID;
            END
        END
        ELSE IF @operation = 'UPDATE'
        BEGIN
            UPDATE StudentAdmission
            SET 
                firstName = ISNULL(@firstName, firstName),
                lastName = ISNULL(@lastName, lastName),
                dateOfBirth = ISNULL(@dateOfBirth, dateOfBirth),
                gender = ISNULL(@gender, gender),
                email = ISNULL(@email, email),
                phoneNumber = ISNULL(@phoneNumber, phoneNumber),
                address = ISNULL(@address, address),
                course = ISNULL(@course, course)
            WHERE admissionID = @admissionID;

            PRINT 'Student admission record updated successfully.';
        END
        ELSE IF @operation = 'DELETE'
        BEGIN
            DELETE FROM StudentAdmission WHERE admissionID = @admissionID;

            PRINT 'Student admission record deleted successfully.';
        END
        ELSE
        BEGIN
            PRINT 'Invalid operation. Use CREATE, READ, UPDATE, or DELETE.';
        END
    END TRY
    BEGIN CATCH
        PRINT 'Error occurred: ' + ERROR_MESSAGE();
    END CATCH
END


EXEC ManageStudentAdmission 
    @operation = 'CREATE',
    @firstName = 'John',
    @lastName = 'Doe',
    @dateOfBirth = '2005-04-20',
    @gender = 'Male',
    @email = 'john.doe@example.com',
    @phoneNumber = '9876543210',
    @address = '123 Main Street',
    @course = 'Computer Science';

EXEC ManageStudentAdmission 
    @operation = 'CREATE',
    @firstName = 'David',
    @lastName = 'George',
    @dateOfBirth = '2001-02-20',
    @gender = 'Male',
    @email = 'david@gmail.com',
    @phoneNumber = '9999999999',
    @address = 'Rose villa Main Street',
    @course = 'Biology Science';


EXEC ManageStudentAdmission 
    @operation = 'READ';

EXEC ManageStudentAdmission 
    @operation = 'READ',
    @admissionID = 1;

EXEC ManageStudentAdmission 
    @operation = 'UPDATE',
    @admissionID = 1,
    @address = '456 Updated Street',
    @phoneNumber = '9123456780';


EXEC ManageStudentAdmission 
    @operation = 'DELETE',
    @admissionID = 1;