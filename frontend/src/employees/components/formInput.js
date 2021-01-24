import React, { useEffect } from "react";
import CRUD from "../../services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();


  const [postData, setPostData] = React.useState({

    lastname: "",
    firstname: "",
    birthdate: "",
    photo: "",
    notes: "",  
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        lastname: updateItem.lastname_name,
        firstname: updateItem.firstname_name,
        birthdate: updateItem.birthdate,
        photo: updateItem.photo,
        notes: updateItem.notes,
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
        ? CRUD.updateOneEmp(updateID, postData)
        : CRUD.createEmp(postData);

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
      <Label for="lastname">Last Name</Label>
      <Input
        type="text"
        name="lastname"
        value={postData.lastname}
        onChange={handleChangeData}
        placeholder="Last Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="firstname">First Name</Label>
      <Input
        type="text"
        name="firstname"
        value={postData.firstname}
        onChange={handleChangeData}
        placeholder="First Name"
      />
    </FormGroup>
    <FormGroup>
      <Label for="birthdate">Birthdate </Label>
      <Input
        type="text"
        name="birthdate"
        value={postData.birthdate}
        onChange={handleChangeData}
        placeholder="Birthdate"
      />
    </FormGroup>
    <FormGroup>
      <Label for="photo">Photo</Label>
      <Input
        type="text"
        name="photo"
        value={postData.photo}
        onChange={handleChangeData}
        placeholder="Photo"
      />
    </FormGroup>
    <FormGroup>
      <Label for="notes">Notes</Label>
      <Input
        type="text"
        name="notes"
        value={postData.notes}
        onChange={handleChangeData}
        placeholder="Notes"
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
