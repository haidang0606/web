import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();


  const [postData, setPostData] = React.useState({
    
    customer_name: "",
    contact_name: "",
    address: "",
    city: "Da Nang",
    postal_code: "45000",
    country: "VN",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        customer_name: updateItem.customer_name,
        contact_name: updateItem.contact_name,
        address: updateItem.address,
        city: updateItem.city,
        postal_code: updateItem.postal_code,
        country: updateItem.country,
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
        ? CRUD.updateOne(updateID, postData)
        : CRUD.create(postData);

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
    console.log("CustomerName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); 
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="customerName">Customer Name</Label>
        <Input
          type="text"
          name="customer_name"
          value={postData.customer_name}
          onChange={handleChangeData}
          placeholder="Customer Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="contactName">Contact Name</Label>
        <Input
          type="text"
          name="contact_name"
          value={postData.contact_name}
          onChange={handleChangeData}
          placeholder="Contact Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="_address">Address</Label>
        <Input
          type="text"
          name="address"
          value={postData.address}
          onChange={handleChangeData}
          placeholder="Address"
          id=""
        />
      </FormGroup>

      <input type="text" name="city" value="this is city" hidden />
      <input type="text" name="postalCode" value="this is postalCode" hidden />
      <input type="text" name="country" value="this is country" hidden />
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
