import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();

  
  const [postData, setPostData] = React.useState({
    
    shippername: "",
    phone: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        shippername: updateItem.shipper_name,
        phone: updateItem.phone, 
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
        ? CRUD.updateOneShip(updateID, postData)
        : CRUD.createShip(postData);

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
      <Label for="shippername">Shipper Name</Label>
      <Input
        type="text"
        name="shippername"
        value={postData.shippername}
        onChange={handleChangeData}
        placeholder="Shipper Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="phone">Phone</Label>
      <Input
        type="text"
        name="phone"
        value={postData.phone}
        onChange={handleChangeData}
        placeholder="Phone"
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
