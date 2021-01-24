import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "employees/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listEmployees, setListEmployees] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  

  const RetrieveAllEmployees = () => {
    console.log("Retrieve all employees");
    CRUD.getAllEmp().then((res) => {
      console.log(res);
      setListEmployees(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllEmployees(); 
  }, [checkUpdate]); 

  return (
    
    <Container fluid={true}>
      <h2 className="text-center">Employees</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listEmployees}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Employees</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
