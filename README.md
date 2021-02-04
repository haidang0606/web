# 17Ct1
# Trần Hữu Nhã
# Lê Hải Đăng
# Phạm Minh Hiếu
# Backend nhóm em làm được 8 bảng còn frontend làm đc 6 bảng bị lỗi 2 bảng OrderDetails và bảng Shippers
# Entity
# Customer
* CustomerID: int
* CustomerNName: string
* ContactName: string
* Address: string
* City: string
* PostalCode: string
* Country: string
# Categories
* CategoryID: int
* CategoryName: string
* Description: string
# Employees
* EmployeeID: int
* LastName: string
* FirstName: string
* Birthdate: date
* Photo: string
* Notes: string
# OrderDetails
* OrderDetailID: int
* OrderID: string
* ProductID: string
* Quantity: string
# Orders
* OrderID: int
* CustomerID: string
* EmployeeID: string
* OrderDate: date
* ShipperID: string
# Products
* ProductID: int
* ProductName: string
* SupplierID: string
* CategoryID: string
* Unit: string
* Price: string
# Shippers
* ShipperID: int
* ShipperName: string
* Phone: string
# Suppliers
* SupplierID: int
* SupplierName: string
* ContactName: string
* Address: string
* City: string
* PostalCode: string
* Country: string
* Phone: string
# API
# Customer
### Get all Customer
* Request
    * Method: GET
    * Endpoint: /customer_all
    * Params: None
    * Body: None
* Response: [Customer]
### Add a Customer
* Request
    * Method: POST
    * Endpoint: /customer_add
    * Body:
        * customer_name: string
        * contact_name: string
        * address: string
        * city: string
        * postal_code: string
        * country: string
* Response: Message
### Update a Customer
* Request:
    * Method: PUT
    * Endpoint: /customer/:customer_id
    * Body:
        * customer_name: string
        * contact_name: string
        * address: string
        * city: string
        * postal_code: string
        * country: string
* Response: Message

### Delete a Customer
* Request:
    * Method: DELETE
    * Endpoint: /customer/:customer_id
* Response: message
# category
# Get all Categories
* Request:
    * Method: GET
    * Endpoint: /categories_all
    * Params: None
    * Body: None Response: [Categories]
# Add a Categories
* Request:
    * Method: POST
    * Endpoint: /add_categories
    * Body:
        * CategoryName: string
        * Description: string
* Response: Message
# Update a Categories
* Request:
    * Method: PUT
    * Endpoint: /categories/:categories_id
    * Body:
        * CategoryName: string
        * Description: string
* Response: Message
# Delete a Categories
* Request:
    * Method: DELETE
    * Endpoint: /categories/:categories_id
* Response: message
# Employee
# Get all Employees
* Request:
    * Method: GET
    * Endpoint: /employees_all
    * Params: None
    * Body: None
* Response: [Employees]
# Add a Employees
* Request:
    * Method: POST
    * Endpoint: /add_employees
    * Body:
        * LastName: string
        * FirstName: string
        * Birthdate: date
        * Photo: string
        * Notes: string
* Response: Message
# Update a Employees
* Request:
    * Method: PUT
    * Endpoint: /employees/:employees_id
    * Body:
        * LastName: string
        * FirstName: string
        * Birthdate: date
        * Photo: string
        * Notes: string
* Response: Message
# Delete a Employees
* Request:
    * Method: DELETE
    * Endpoint: /employees/:employees_id
* Response: message
# OrderDetails
# Get all Orderdetails
* Request:
    * Method: GET
    * Endpoint: /orderdetails_all
    * Params: None
    * Body: None
* Response: [Orderdetail]
# Add a Orderdetails
* Request:
    * Method: POST
    * Endpoint: /add_orderdetails
    * Body:
        * OrderID: string
        * ProductID: string
        * Quantity: string
* Response: Message
# Update a OrderDetails
* Request:
    * Method: PUT
    * Endpoint: /orderdetails/:orderdetails_id
    * Body:
        * OrderID: string
        * ProductID: string
        * Quantity: string
* Response: Message
# Delete a OrderDetails
* Request:
    * Method: DELETE
    * Endpoint: /orderdetails/:orderdetails_id
* Response: message
# Orders
# Get all Orders
* Request:
    * Method: GET
    * Endpoint:/orders_all
    * Params: None
    * Body: None
* Response: [Orders]
# Add a Orders
* Request:
    * Method: POST
    * Endpoint: /add_orders
    * Body:
        * CustomerID: string
        * EmployeeID: string
        * OrderDate: date
        * ShipperID: string
* Response: Message
# Update a Orders
* Request:
    * Method: PUT
    * Endpoint: /orders/:orders_id
    * Body:
        * CustomerID: string
        * EmployeeID: string
        * OrderDate: date
        * ShipperID: string
* Response: Message
# Delete a Orders
* Request:
    * Method: DELETE
    * Endpoint: /orders/:orders_id
* Response: message
# Products
# Get all Products
* Request:
    * Method: GET
    * Endpoint: /products_all
    * Params: None
    * Body: None
* Response: [Products]
# Add a Products
* Request:
    * Method: POST
    * Endpoint: /add_products
    * Body:
        * ProductName: string
        * SupplierID: string
        * CategoryID: string
        * Unit: string
        * Price: string
* Response: Message
# Update a Products
* Request:
    * Method: PUT
    * Endpoint: //products/:product_id
    * Body:
        * ProductName: string
        * SupplierID: string
        * CategoryID: string
        * Unit: string
        * Price: string
* Response: Message
# Delete a Products
* Request:
    * Method: DELETE
    * Endpoint:/products/:product_id
* Response: message
# Shippers
# Get all Shippers
* Request:
    * Method: GET
    * Endpoint: /shippers_all
    * Params: None
    * Body: None
* Response: [Shippers]
# Add a Shippers
* Request:
    * Method: POST
    * Endpoint: /add_shippers
    * Body:
        * ShipperName: string
        * Phone: string
* Response: Message
# Update a Shippers
* Request:
    * Method: PUT
    * Endpoint: /shippers/:shipper_id
    * Body:
        * ShipperName: string
        * Phone: string
* Response: Message
# Delete a Shippers
* Request:
    * Method: DELETE
    * Endpoint: /shippers/:shipper_id
* Response: message
# Suppliers
# Get all Suppliers
* Request:
    * Method: GET
    * Endpoint: /suppliers_all
    * Params: None
    * Body: None
* Response: [Suppliers]
# Add a Suppliers
* Request:
    * Method: POST
    * Endpoint: /add_suppliers
    * Body:
        * SupplierName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
        * Phone: string
* Response: Message
# Update a Suppliers
* Request:
    * Method: PUT
    * Endpoint: /suppliers/:supplier_id
    * Body:
        * SupplierName: string
        * ContactName: string
        * Address: string
        * City: string
        * PostalCode: string
        * Country: string
        * Phone: string
* Response: Message
# Delete a Suppliers
* Request:
    * Method: DELETE
    * Endpoint: /suppliers/:supplier_id
* Response: message
