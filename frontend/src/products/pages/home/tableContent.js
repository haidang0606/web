import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  
  function handleOnDelete(id) {
    
    CRUD.deleteOnePro(id).then((res) => {
     
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    
    history.push(`/products/update/${item.product_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ProductID</th>
          <th>ProductName </th>
          <th>SupplierID</th>
          <th>CategoryID</th>
          <th>Unit</th>
          <th>Price</th>          
        </tr>
      </thead>
      <tbody>
        {items.map((item, index 
        ) => (
          <tr>
            <td>{item.product_id}</td>
            <td>{item.productname}</td>
            <td>{item.supplier_id}</td>
            <td>{item.category_id}</td>
            <td>{item.unit}</td>
            <td>{item.price}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.product_id)}>
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
