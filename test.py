import requests

data = {}
data['customername'] = 'minh'
data['contactname'] = '03034'
data['address'] = '77 huy can'
data['city'] = 'dn'
data['postalcode'] = '5000'
data['country'] = 'da nang'

res = requests.post('http://192.168.1.4:5000/add_customer',json=data)
print(res.text)

# data = {}
# data['customername'] = 'nha'
# data['contactname'] = '03034'
# data['address'] = '77 huy can'
# data['city'] = 'dn'
# data['postalcode'] = '5000'
# data['country'] = 'da nang'

# res = requests.put('http://192.168.1.4:5000/customer/1',json=data)
# print(res.text)

# res = requests.delete('http://192.168.1.4:5000/customer/1')
# print(res.text)