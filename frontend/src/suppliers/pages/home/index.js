import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "suppliers/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listSuppliers, setListSuppliers] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  
  const RetrieveAllSuppliers = () => {
    
    console.log("Retrieve all customer");
    CRUD.getAllSup().then((res) => {
      console.log(res);
      setListSuppliers(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllSuppliers();
  }, [checkUpdate]);

  return (

    <Container fluid={true}>
      <h2 className="text-center">Suppliers</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listSuppliers}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Suppliers</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
