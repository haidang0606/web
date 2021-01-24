import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  
  function handleOnDelete(id) {
    
    CRUD.deleteOneOrderdetails(id).then((res) => {
      
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    
    history.push(`/orderdetails/update/${item.orderdetail_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>OrderDetailID</th>
          <th>OrderID </th>
          <th>ProductID</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index 
        ) => (
          <tr>
            <td>{item.orderdetail_id}</td>
            <td>{item.order_id}</td>
            <td>{item.product_id}</td>
            <td>{item.quantity}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.orderdetail_id)}>
                Delete
              </Button>
            </td>
            <td>
              <Button color="warning" onClick={() => handleOnEdit(item)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default TableContent;
