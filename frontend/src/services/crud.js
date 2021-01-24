import HttpRequest from "./http-common";

const getAll = async () => {
  return await HttpRequest.get("http://localhost:5000/customer_all");
};

const create = (data) => {
  return HttpRequest.post("http://localhost:5000/add_customer", data);
};

const deleteOne = (id) => {
  return HttpRequest.delete(`http://localhost:5000/customer/${id}`);
};

const updateOne = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/customer/${id}`, data);
};
// categories
const getAllCate = async () => {
  return await HttpRequest.get("http://localhost:5000/categories_all");
};

const createCate = (data) => {
  return HttpRequest.post("http://localhost:5000/add_categories", data);
};

const deleteOneCate = (id) => {
  return HttpRequest.delete(`http://localhost:5000/categories/${id}`);
};

const updateOneCate = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/categories/${id}`, data);
};
//employees
const getAllEmp = async () => {
  return await HttpRequest.get("http://localhost:5000/employees_all");
};

const createEmp = (data) => {
  return HttpRequest.post("http://localhost:5000/add_employees", data);
};

const deleteOneEmp = (id) => {
  return HttpRequest.delete(`http://localhost:5000/employees/${id}`);
};

const updateOneEmp = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/employees/${id}`, data);
};
//orderdetails
const getAllOrderdetails = async () => {
  return await HttpRequest.get("http://localhost:5000/orderdetails_all");
};

const createOrderdetails = (data) => {
  return HttpRequest.post("http://localhost:5000/add_orderdetails", data);
};

const deleteOneOrderdetails = (id) => {
  return HttpRequest.delete(`http://localhost:5000/orderdetails/${id}`);
};

const updateOneOrderdetails = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/orderdetails/${id}`, data);
};
//orders
const getAllOrders = async () => {
  return await HttpRequest.get("http://localhost:5000/orders_all");
};

const createOrders = (data) => {
  return HttpRequest.post("http://localhost:5000/add_orders", data);
};

const deleteOneOrders = (id) => {
  return HttpRequest.delete(`http://localhost:5000/orders/${id}`);
};

const updateOneOrders = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/orders/${id}`, data);
};
//products
const getAllPro = async () => {
  return await HttpRequest.get("http://localhost:5000/products_all");
};

const createPro = (data) => {
  return HttpRequest.post("http://localhost:5000/add_products", data);
};

const deleteOnePro = (id) => {
  return HttpRequest.delete(`http://localhost:5000/products/${id}`);
};

const updateOnePro = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/products/${id}`, data);
};
//shippers
const getAllShip = async () => {
  return await HttpRequest.get("http://localhost:5000/shippers_all");
};

const createShip = (data) => {
  return HttpRequest.post("http://localhost:5000/add_shippers", data);
};

const deleteOneShip = (id) => {
  return HttpRequest.delete(`http://localhost:5000/shippers/${id}`);
};

const updateOneShip = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/shippers/${id}`, data);
};
//suppliers
const getAllSup = async () => {
  return await HttpRequest.get("http://localhost:5000/suppliers_all");
};

const createSup = (data) => {
  return HttpRequest.post("http://localhost:5000/add_suppliers", data);
};

const deleteOneSup = (id) => {
  return HttpRequest.delete(`http://localhost:5000/suppliers/${id}`);
};

const updateOneSup = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/suppliers/${id}`, data);
};
export default { 
  getAll, create, deleteOne, updateOne,
  getAllCate, createCate, deleteOneCate, updateOneCate,
  getAllEmp, createEmp, deleteOneEmp, updateOneEmp,
  getAllOrderdetails, createOrderdetails, deleteOneOrderdetails, updateOneOrderdetails,
  getAllOrders, createOrders, deleteOneOrders, updateOneOrders,
  getAllPro, createPro, deleteOnePro, updateOnePro,
  getAllShip, createShip, deleteOneShip, updateOneShip,
  getAllSup, createSup, deleteOneSup, updateOneSup
};
