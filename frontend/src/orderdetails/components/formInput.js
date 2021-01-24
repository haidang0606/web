import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();


  const [postData, setPostData] = React.useState({

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
    setPostData({ ...postData, [e.target.name]: e.target.value }); 
  }

  function handleOnClickSubmit(e) {
    
    console.log("POST DATA: " + JSON.stringify(postData));
    const crudType =
      type === "update"
        ? CRUD.updateOneOrderdetails(updateID, postData)
        : CRUD.createOrderdetails(postData);

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
      <Label for="productid">ProductID</Label>
      <Input
        type="text"
        name="productid"
        value={postData.productid}
        onChange={handleChangeData}
        placeholder="ProductID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="quantity">Quantity</Label>
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
