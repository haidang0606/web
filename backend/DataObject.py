import psycopg2

from BusinessObject import Customer as CustomerEntity
from BusinessObject import Categories as CategoriesEntity
from BusinessObject import Employees as EmployeesEntity
from BusinessObject import OrderDetails as OrderDetailsEntity
from BusinessObject import Orders as OrdersEntity
from BusinessObject import Products as ProductsEntity
from BusinessObject import Shippers as ShippersEntity
from BusinessObject import Suppliers as SuppliersEntity

class Customer:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, customer: CustomerEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO customers(customername, contactname, address, city, postalcode, country)
                VALUES(%s, %s, %s, %s, %s, %s)"""
        cursor.execute(sql, (customer.customer_name, customer.contact_name, customer.address, customer.city, customer.postal_code, customer.country))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM customers"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            customer = CustomerEntity()
            customer.fetch_data(row)
            result.append(customer.to_json())
        return result

    def delete(self, customer: CustomerEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM customers WHERE customerid = %s"
        cursor.execute(sql, (customer.customer_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, customer: CustomerEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE customers SET
                    customername=%s, contactname=%s, address=%s,
                    city=%s, postalcode=%s, country=%s WHERE customerid=%s"""
        cursor.execute(sql, (customer.customer_name, customer.contact_name, customer.address, customer.city, customer.postal_code, customer.country, customer.customer_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404


 #----------------------------------------------------
class Categories:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, categories: CategoriesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO categories(categoriesname,description)
                VALUES(%s, %s)"""
        cursor.execute(sql, (categories.categories_name,categories.description))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM categories"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            categories = CategoriesEntity()
            categories.fetch_data(row)
            result.append(categories.to_json())
        return result

    def delete(self, categories: CategoriesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM categories WHERE categoriesid = %s"
        cursor.execute(sql, (categories.categories_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, categories: CategoriesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE categories SET
                    categoriesname=%s, description =%s WHERE categoriesid=%s"""
        cursor.execute(sql, (categories.categories_name, categories.description,categories.categories_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#---------------------------------------------------
class Employees:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, employees: EmployeesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO employees(lastname,firstname,birthdate,photo,notes)
                VALUES(%s, %s, %s, %s, %s)"""
        cursor.execute(sql, (employees.lastname_name,employees.firstname_name,employees.birthdate,employees.photo,employees.notes))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM employees"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            employees = EmployeesEntity()
            employees.fetch_data(row)
            result.append(employees.to_json())
        return result

    def delete(self, employees: EmployeesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM employees WHERE employeesid = %s"
        cursor.execute(sql, (employees.employees_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, employees: EmployeesEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE employees SET
                    lastname=%s, firstname =%s, birthdate=%s, photo=%s, notes=%s WHERE employeesid=%s"""
        cursor.execute(sql, (employees.lastname_name,
                             employees.firstname_name,
                             employees.birthdate,
                             employees.photo,
                             employees.notes, 
                             employees.employees_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#-------------------------------------
class OrderDetails:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, orderdetails: OrderDetailsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO orderdetails(orderid,productid,quantity)
                VALUES(%s, %s, %s)"""
        cursor.execute(sql, (orderdetails.order_id,orderdetails.product_id,orderdetails.quantity))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM orderdetails"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            orderdetails = OrderDetailsEntity()
            orderdetails.fetch_data(row)
            result.append(orderdetails.to_json())
        return result

    def delete(self, orderdetails: OrderDetailsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM orderdetails WHERE orderdetailsid = %s"
        cursor.execute(sql, (orderdetails.orderdetails_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, orderdetails: OrderDetailsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE orderdetails SET
                    orderid=%s, productid=%s, quantity=%s WHERE orderdetailsid=%s"""
        cursor.execute(sql, (orderdetails.order_id, orderdetails.product_id,orderdetails.quantity,orderdetails.orderdetails_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#----------------------------------------------------
class Products:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, products: ProductsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO products(productname,supplierid,categoryid,unit,price)
                VALUES(%s, %s, %s, %s, %s )"""
        cursor.execute(sql, (products.productname,products.supplier_id,products.category_id,products.unit,products.price))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM products"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            products = ProductsEntity()
            products.fetch_data(row)
            result.append(products.to_json())
        return result

    def delete(self, products: ProductsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM products WHERE productid = %s"
        cursor.execute(sql, (products.product_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, products: ProductsEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE products SET
                    productname=%s, supplierid=%s, categoryid=%s,  unit=%s,  price=%s WHERE productid=%s"""
        cursor.execute(sql, (products.productname, products.supplier_id,products.category_id,products.unit,products.price,products.product_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#---------------------------------
class Orders:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, orders: OrdersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO orders(customerid,employeeid,orderdate,shipperid)
                VALUES(%s, %s, %s, %s)"""
        cursor.execute(sql, (orders.customer_id,orders.employee_id,orders.orderdate,orders.shipper_id))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM orders"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            orders = OrdersEntity()
            orders.fetch_data(row)
            result.append(orders.to_json())
        return result

    def delete(self, orders: OrdersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM orders WHERE orderid = %s"
        cursor.execute(sql, (orders.order_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, orders: OrdersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE orders SET
                    customerid=%s, employeeid=%s, orderdate=%s, shipperid=%s WHERE orderid=%s"""
        cursor.execute(sql, (orders.customer_id, orders.employee_id,orders.orderdate,orders.shipper_id,orders.order_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#--------------------------------------
class Shippers:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, shippers: ShippersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO shippers(shippername,phone)
                VALUES(%s, %s)"""
        cursor.execute(sql, (shippers.shipper_name,shippers.phone))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM `shippers`"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            shippers = ShippersEntity()
            shippers.fetch_data(row)
            result.append(shippers.to_json())
        return result

    def delete(self, shippers: ShippersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM shippers WHERE shipperid = %s"
        cursor.execute(sql, (shippers.shipper_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, shippers: ShippersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE shippers SET
                    shippername=%s, phone=%s WHERE shipperid=%s"""
        cursor.execute(sql, (shippers.shipper_name, shippers.phone,shippers.shipper_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404
#-----------------------------------------------
class Suppliers:

    def __init__(self, connection_data):
        self.connection_data = connection_data

    def insert(self, suppliers: SuppliersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """INSERT INTO suppliers(suppliername,contactname,address,city,postalcode,country,phone)
                VALUES(%s, %s, %s, %s, %s, %s, %s)"""
        cursor.execute(sql, (suppliers.supplier_name,
                             suppliers.contact_name,
                             suppliers.address,
                             suppliers.city,
                             suppliers.postalcode,
                             suppliers.country,
                             suppliers.phone))
        conn.commit()
        return 'Insert successfully'
    
    def get_all(self):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "SELECT * FROM suppliers"
        cursor.execute(sql)
        conn.commit()
        rows = cursor.fetchall()
        result = []
        for row in rows:
            suppliers = SuppliersEntity()
            suppliers.fetch_data(row)
            result.append(suppliers.to_json())
        return result

    def delete(self, suppliers: SuppliersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = "DELETE FROM suppliers WHERE supplierid = %s"
        cursor.execute(sql, (suppliers.supplier_id, ))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Deleted successfully', 200
        return 'Id not found', 404

    def update(self, suppliers: SuppliersEntity):
        conn = psycopg2.connect(host=self.connection_data['host'],
                                port=self.connection_data['port'],
                                user=self.connection_data['user'],
                                password=self.connection_data['password'],
                                database=self.connection_data['database'])
        cursor = conn.cursor()
        sql = """UPDATE suppliers SET
                    suppliername=%s, contactname=%s, address=%s, city=%s, postalcode=%s, country=%s, phone=%s WHERE supplierid=%s"""
        cursor.execute(sql, (suppliers.supplier_name, suppliers.contact_name,suppliers.address,suppliers.city,suppliers.postalcode,suppliers.country,suppliers.phone,suppliers.supplier_id))
        conn.commit()
        n = cursor.rowcount
        if n > 0:
            return 'Updated successfully', 200
        return 'Id not found', 404


