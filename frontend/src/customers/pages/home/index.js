import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "customers/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listCustomers, setListCustomers] = React.useState([]);
  const [checkUpdate, setCheckUpdate] = React.useState(false);

 
  const RetrieveAllCustomers = () => {
    
    console.log("Retrieve all customer");
    CRUD.getAll().then((res) => {
     
      setListCustomers(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllCustomers(); 
  }, [checkUpdate]);
  return (
    
    <Container fluid={true}>
      <h2 className="text-center">Northwind React Example</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listCustomers}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Customer</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
