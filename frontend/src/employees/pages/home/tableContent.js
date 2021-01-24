import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneEmp(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/employees/update/${item.employees_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>EmployeeID</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Birthdate</th>
          <th>Photo</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index //Map responses list data to table row
        ) => (
          <tr>
            <td>{item.employees_id}</td>
            <td>{item.lastname_name}</td>
            <td>{item.firstname_name}</td>
            <td>{item.birthdate}</td>
            <td>{item.photo}</td>
            <td>{item.notes}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.employees_id)}>
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
