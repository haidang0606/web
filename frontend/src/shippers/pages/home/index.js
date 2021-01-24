import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "shippers/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
 
  const [listShippers, setListShippers] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  

  const RetrieveAllShippers = () => {
    
    console.log("Retrieve all shippers");
    CRUD.getAllShip().then((res) => {
      console.log(res);
      setListShippers(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllShippers(); 
  }, [checkUpdate]);

  return (
   
    <Container fluid={true}>
      <h2 className="text-center">Shippers</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listShippers}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Shippers</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
