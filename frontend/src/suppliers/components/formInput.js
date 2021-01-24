import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();

  // onSubmitSuccess => onUpdateSuccess
  // Syntax js, defind {abc: "text", def: 12} => object (properties: abc, def)
  const [postData, setPostData] = React.useState({
    //Create postData state
    suppliername: "",
    contactname: "",
    address: "",
    city: "",
    postalcode: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        suppliername: updateItem.supplier_name,
        contactname: updateItem.contact_name,
        address: updateItem.address,
        city: updateItem.city,
        postalcode: updateItem.postalcode,
        country: updateItem.country,
        phone: updateItem.phone,
      });
    }
  }, []);

  function handleChangeData(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value }); //Only change customer name in postData
  }

  function handleOnClickSubmit(e) {
    // Handle event when click submit button
    console.log("POST DATA: " + JSON.stringify(postData));
    const crudType =
      type === "update"
        ? CRUD.updateOneSup(updateID, postData)
        : CRUD.createSup (postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";
          
          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated successfully") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
    <FormGroup>
      <Label for="suppliername">Supplier Name</Label>
      <Input
        type="text"
        name="suppliername"
        value={postData.suppliername}
        onChange={handleChangeData}
        placeholder="Supplier Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="contactname">Contact Name</Label>
      <Input
        type="text"
        name="contactname"
        value={postData.contactname}
        onChange={handleChangeData}
        placeholder="Contact Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="address">Address</Label>
      <Input
        type="text"
        name="address"
        value={postData.address}
        onChange={handleChangeData}
        placeholder="Address"
      />
    </FormGroup>
    <FormGroup>
      <Label for="city">City</Label>
      <Input
        type="text"
        name="city"
        value={postData.city}
        onChange={handleChangeData}
        placeholder="City"
      />
    </FormGroup>
    <FormGroup>
      <Label for="postalcode">PostalCode</Label>
      <Input
        type="text"
        name="postalcode"
        value={postData.postalcode}
        onChange={handleChangeData}
        placeholder="PostalCode"
      />
    </FormGroup>
    <FormGroup>
      <Label for="country">Country</Label>
      <Input
        type="text"
        name="country"
        value={postData.country}
        onChange={handleChangeData}
        placeholder="Country"
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
