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
export default { 
  getAll, create, deleteOne, updateOne,
  getAllCate, createCate, deleteOneCate, updateOneCate

};
