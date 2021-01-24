import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneOrderdetails(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
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
        {items.map((item, index //Map responses list data to table row
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
