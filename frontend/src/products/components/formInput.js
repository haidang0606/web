import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();

  
  const [postData, setPostData] = React.useState({
    
    productname: "",
    supplierid: "",
    categoryid: "",
    unit: "",
    price: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        productname: updateItem.productname,
        supplierid: updateItem.supplier_id,
        categoryid: updateItem.category_id,
        unit: updateItem.unit,
        price: updateItem.price,
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
        ? CRUD.updateOnePro(updateID, postData)
        : CRUD.createPro(postData);

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
      <Label for="productname">Product Name</Label>
      <Input
        type="text"
        name="productname"
        value={postData.productname}
        onChange={handleChangeData}
        placeholder="Product Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="supplierid">SupplierID</Label>
      <Input
        type="text"
        name="supplierid"
        value={postData.supplierid}
        onChange={handleChangeData}
        placeholder="SupplierID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="categoryid">CategoryID</Label>
      <Input
        type="text"
        name="categoryid"
        value={postData.categoryid}
        onChange={handleChangeData}
        placeholder="CategoryID"
      />
    </FormGroup>
    <FormGroup>
      <Label for="unit">Unit</Label>
      <Input
        type="text"
        name="unit"
        value={postData.unit}
        onChange={handleChangeData}
        placeholder="Unit"
      />
    </FormGroup>
    <FormGroup>
      <Label for="price">Price</Label>
      <Input
        type="text"
        name="price"
        value={postData.price}
        onChange={handleChangeData}
        placeholder="Price"
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
