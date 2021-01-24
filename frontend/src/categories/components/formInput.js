import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();


  const [postData, setPostData] = React.useState({

    categoriesname: "",
    description: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        categoriesname: updateItem.categories_name,
        description: updateItem.description,
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
        ? CRUD.updateOneCate(updateID, postData)
        : CRUD.createCate(postData);

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
      <Label for="customerName">Customer Name</Label>
      <Input
        type="text"
        name="categoriesname"
        value={postData.categoriesname}
        onChange={handleChangeData}
        placeholder="Category Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="contactName">Contact Name</Label>
      <Input
        type="text"
        name="description"
        value={postData.description}
        onChange={handleChangeData}
        placeholder="Contact Name"
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
