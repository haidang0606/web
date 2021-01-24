import React from "react";
import CRUD from "../../../services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneShip(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
      alert("Delete Success!")
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/shippers/update/${item.shipper_id}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ShipperID</th>
          <th>ShipperName</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index //Map responses list data to table row
        ) => (
          <tr>
            <td>{item.shipper_id}</td>
            <td>{item.shipper_name}</td>
            <td>{item.phone}</td>
            <td>
              <Button color="danger" onClick={() => handleOnDelete(item.shipper_id)}>
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
