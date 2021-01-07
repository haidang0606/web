class Customer:

    def __init__(self, customer_id=None, customer_name=None, contact_name=None, address=None, city=None, postal_code=None, country=None):
        self.customer_id = customer_id
        self.customer_name = customer_name
        self.contact_name = contact_name
        self.address = address
        self.city = city
        self.postal_code = postal_code
        self.country = country

    def fetch_data(self, row):
        self.customer_id = row[0]
        self.customer_name = row[1]
        self.contact_name = row[2]
        self.address = row[3]
        self.city = row[4]
        self.postal_code = row[5]
        self.country = row[6]

    def to_json(self):
        return {
            'customer_id': self.customer_id,
            'customer_name': self.customer_name,
            'contact_name': self.contact_name,
            'address': self.address,
            'postal_code': self.postal_code,
            'country': self.country,
            'city': self.city
        }
#-----------------------------------------
class Categories:

    def __init__(self, categories_id=None, categories_name=None,description=None):
        self.categories_id = categories_id
        self.categories_name = categories_name
        self.description= description

    def fetch_data(self, row):
        self.categories_id = row[0]
        self.categories_name = row[1]
        self.description = row[2]
        
    def to_json(self):
        return {
            'categories_id': self.categories_id,
            'categories_name': self.categories_name,
            'description': self.description
        }
 #-----------------------------------------     
class Employees:

    def __init__(self, employees_id=None, lastname_name=None, firstname_name=None, birthdate=None, photo=None, notes=None):
        self.employees_id = employees_id
        self.lastname_name = lastname_name
        self.firstname_name= firstname_name
        self.birthdate= birthdate
        self.photo= photo
        self.notes= notes

    def fetch_data(self, row):
        self.employees_id = row[0]
        self.lastname_name = row[1]
        self.firstname_name = row[2]
        self.birthdate = row[3]
        self.photo = row[4]
        self.notes = row[5]
       
        
    def to_json(self):
        return {
            'employees_id': self.employees_id,
            'lastname_name': self.lastname_name,
            'firstname_name': self.firstname_name,
            'birthdate': self.birthdate,
            'photo': self.photo,
            'notes': self.notes
        }
#---------------------------------------------
class OrderDetails:

    def __init__(self, orderdetails_id=None, order_id=None,product_id=None,quantity=None):
        self.orderdetails_id = orderdetails_id
        self.order_id = order_id
        self.product_id= product_id
        self.quantity= quantity

    def fetch_data(self, row):
        self.orderdetails_id = row[0]
        self.order_id = row[1]
        self.product_id = row[2]
        self.quantity = row[3]
        
    def to_json(self):
        return {
            'orderdetails_id': self.orderdetails_id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }
#---------------------------------
class Products:

    def __init__(self, product_id=None, productname=None,supplier_id=None,category_id=None,unit=None,price=None):
        self.product_id = product_id
        self.productname = productname
        self.supplier_id= supplier_id
        self.category_id= category_id
        self.unit= unit
        self.price= price

    def fetch_data(self, row):
        self.product_id = row[0]
        self.productname = row[1]
        self.supplier_id = row[2]
        self.category_id = row[3]
        self.unit = row[4]
        self.price = row[5]
        
    def to_json(self):
        return {
            'product_id': self.product_id,
            'productname': self.productname,
            'supplier_id': self.supplier_id,
            'category_id': self.category_id,
            'unit': self.unit,
            'price': self.price
        }
#--------------------------------------------------------------------------------------------------------
class Orders:

    def __init__(self, order_id=None, customer_id=None,employee_id=None,orderdate=None,shipper_id=None):
        self.order_id = order_id
        self.customer_id = customer_id
        self.employee_id= employee_id
        self.orderdate= orderdate
        self.shipper_id= shipper_id

    def fetch_data(self, row):
        self.order_id = row[0]
        self.customer_id = row[1]
        self.employee_id = row[2]
        self.orderdate = row[3]
        self.shipper_id = row[4]
        
    def to_json(self):
        return {
            'order_id': self.order_id,
            'customer_id': self.customer_id,
            'employee_id': self.employee_id,
            'orderdate': self.orderdate,
            'shipper_id': self.shipper_id
        }
#-------------------------------------------------------------
class Shippers:

    def __init__(self, shipper_id=None,shipper_name=None,phone=None):
        self.shipper_id = shipper_id
        self.shipper_name = shipper_name
        self.phone = phone

    def fetch_data(self, row):
        self.shipper_id = row[0]
        self.shipper_name = row[1]
        self.phone = row[2]
        
    def to_json(self):
        return {
            'shipper_id': self.shipper_id,
            'shipper_name': self.shippername,
            'phone': self.phone
        }
#----------------------
class Suppliers:

    def __init__(self, supplier_id=None, supplier_name=None, contact_name=None, address=None, city=None, postalcode=None,country=None,phone=None):
        self.supplier_id = supplier_id
        self.supplier_name = supplier_name
        self.contact_name = contact_name
        self.address = address
        self.city = city
        self.postalcode = postalcode
        self.country= country
        self.phone= phone

    def fetch_data(self, row):
        self.supplier_id = row[0]
        self.supplier_name = row[1]
        self.contact_name = row[2]
        self.address = row[3]
        self.city = row[4]
        self.postalcode = row[5]
        self.country = row[6]
        self.phone = row[7]
        
    def to_json(self):
        return {
            'supplier_id': self.supplier_id,
            'supplier_name': self.supplier_name,
            'contact_name': self.contact_name,
            'address': self.address,
            'city': self.city,
            'postalcode': self.postalcode,
            'country': self.country,
            'phone': self.phone
        }
