import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  
  function handleOnDelete(id) {
    
    CRUD.deleteOne(id).then((res) => {
      
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    
    history.push(`/customers/update/${item.customer_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Contact Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Postal Code</th>
          <th>Country</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((
          item,
          index 
        ) => (
          <tr>
            <td>{item.customer_id}</td>
            <td>{item.customer_name}</td>
            <td>{item.contact_name}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
            <td>{item.postal_code}</td>
            <td>{item.country}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.customer_id)}
              >
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
