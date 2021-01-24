import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

 
  function handleOnDelete(id) {
    
    CRUD.deleteOneCate(id).then((res) => {
     
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    
    history.push(`/categories/update/${item.categories_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>CategoryID</th>
          <th>Categories Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index 
        ) => (
          <tr>
            <td>{item.categories_id}</td>
            <td>{item.categories_name}</td>
            <td>{item.description}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.categories_id)}>
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
