CREATE TABLE customers (
    CustomerID SERIAL PRIMARY KEY,
    CustomerName varchar(255),
    ContactName varchar(255),
    Address varchar(255),
    City varchar(255),
    PostalCode varchar(255),
    Country varchar(255)
);
CREATE TABLE categories (
    CategoriesID SERIAL PRIMARY KEY,
    CategoriesName varchar(255),
    Description varchar(255)  
);
CREATE TABLE Employees (
    EmployeesID SERIAL PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Photo varchar(255),
    Notes varchar(255) 
);
CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName varchar(255),
    SupplierID varchar(255),
    CategoryID varchar(255),
    Unit varchar(255),
    Price varchar(255) 
);
CREATE TABLE Orders (
    OrderID SERIAL PRIMARY KEY,
    CustomerID varchar(255),
    EmployeeID varchar(255),
    OrderDate date,
    ShipperID varchar(255)  
);  
CREATE TABLE Shippers (
    ShipperID SERIAL PRIMARY KEY,
    ShipperName varchar(255),
    Phone varchar(255)  
);  
CREATE TABLE Suppliers (
    SupplierID SERIAL PRIMARY KEY,
    SupplierName varchar(255),
    ContactName varchar(255),
    Address varchar(255),
    City varchar(255),
    PostalCode varchar(255),
    Country varchar(255),
    Phone varchar(255)
);  
CREATE TABLE OrderDetails(
    OrderDetailID SERIAL PRIMARY KEY,
    OrderID varchar(255),  
    ProductID varchar(255),
    Quantity varchar(255)  
);