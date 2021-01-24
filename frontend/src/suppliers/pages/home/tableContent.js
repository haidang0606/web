import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();


  function handleOnDelete(id) {
    
    CRUD.deleteOneSup(id).then((res) => {
      
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    
    history.push(`/suppliers/update/${item.supplier_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>SupplierID</th>
          <th>SupplierName</th>
          <th>ContactName</th>
          <th>Address</th>
          <th>City</th>
          <th>PostalCode</th>
          <th>Country</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index 
        ) => (
          <tr>
            <td>{item.supplier_id}</td>
            <td>{item.supplier_name}</td>
            <td>{item.contact_name}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
            <td>{item.postalcode}</td>
            <td>{item.country}</td>
            <td>{item.phone}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.supplier_id)}>
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
