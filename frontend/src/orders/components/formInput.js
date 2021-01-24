import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();


  const [postData, setPostData] = React.useState({
    
    customerid: "",
    employeeid: "",
    orderdate: "",
    shipperid: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        customerid: updateItem.customer_id,
        employeeid: updateItem.employee_id,
        orderdate: updateItem.orderdate,
        shipperid: updateItem.shipper_id,
      });
    }
  }, []);

  function handleChangeData(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value }); 
  }

  function handleOnClickSubmit(e) {
    
    console.log("POST DATA: " + JSON.stringify(postData));
    const crudType =
      type === "update"
        ? CRUD.updateOneOrders(updateID, postData)
        : CRUD.createOrders(postData);

    crudType
      .then((res) => {
        
        if (type === "create") {
          const check = res.data.message === "Insert successfully";
          
          onSubmitSuccess(check); 
        } else if (type === "update") {
          if (res.data.message === "Updated successfully") history.goBack(); 
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); 
      });
  }

  function handleOnSubmit(e) {
    e.preventDefault(); 
  }

  return (
    <Form onSubmit={handleOnSubmit}>
    <FormGroup>
      <Label for="customerid">CustomerID</Label>
      <Input
        type="text"
        name="customerid"
        value={postData.customerid}
        onChange={handleChangeData}
        placeholder="Customer ID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="employeeid">EmployeeID</Label>
      <Input
        type="text"
        name="employeeid"
        value={postData.employeeid}
        onChange={handleChangeData}
        placeholder="Employee ID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="orderdate">OrderDate</Label>
      <Input
        type="text"
        name="orderdate"
        value={postData.orderdate}
        onChange={handleChangeData}
        placeholder="OrderDate"
      />
    </FormGroup>
    <FormGroup>
      <Label for="shipperid">ShipperID</Label>
      <Input
        type="text"
        name="shipperid"
        value={postData.shipperid}
        onChange={handleChangeData}
        placeholder="ShipperID"
      />
    </FormGroup>
 

    <div className="text-center">
      <Button
        name="btnSubmit"
        value="Submit"
        onClick={handleOnClickSubmit}
        color="primary"
      >
        Submit{" "}
      </Button>
    </div>
  </Form>
  );
}
export default FormInput;
