import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

 
  function handleOnDelete(id) {
    
    CRUD.deleteOneOrders(id).then((res) => {
      
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }
  function handleOnEdit(item) {
   
    history.push(`/orders/update/${item.order_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>OrderID</th>
          <th>CustomerID</th>
          <th>EmployeeID</th>
          <th>OrderDate</th>
          <th>ShipperID</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index 
        ) => (
          <tr>
            <td>{item.order_id}</td>
            <td>{item.customer_id}</td>
            <td>{item.employee_id}</td>
            <td>{item.orderdate}</td>
            <td>{item.shipper_id}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.order_id)}>
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
