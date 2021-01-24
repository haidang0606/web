import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "orders/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listOrders, setListOrders] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);


  const RetrieveAllOrders = () => {
   
    console.log("Retrieve all customer");
    CRUD.getAllOrders().then((res) => {
      console.log(res);
      setListOrders(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllOrders(); 
  }, [checkUpdate]); 

  return (
    
    <Container fluid={true}>
      <h2 className="text-center">Orders</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listOrders}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Orders</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
