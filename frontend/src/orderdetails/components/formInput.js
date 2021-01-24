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
    orderid: "",
    productid: "",
    quantity: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        orderid: updateItem.order_id,
        productid: updateItem.product_id,
        quantity: updateItem.quantity,
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
        ? CRUD.updateOneOrderdetails(updateID, postData)
        : CRUD.createOrderdetails(postData);

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
      <Label for="orderid">OrderID</Label>
      <Input
        type="text"
        name="orderid"
        value={postData.orderid}
        onChange={handleChangeData}
        placeholder="OrderID "
      />
    </FormGroup>
    <FormGroup>
      <Label for="productid">Product ID</Label>
      <Input
        type="text"
        name="productid"
        value={postData.productid}
        onChange={handleChangeData}
        placeholder="Product ID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="quantity">Quantity </Label>
      <Input
        type="text"
        name="quantity"
        value={postData.quantity}
        onChange={handleChangeData}
        placeholder="Quantity"
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
