import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "orderdetails/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  const [listOrderdetails, setListOrderdetails] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);
  const RetrieveAllOrderdetails = () => {
 
    console.log("Retrieve all orderdetails");
    CRUD.getAllOrderdetails().then((res) => {
      console.log(res);
      setListOrderdetails(res.data.data);
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllOrderdetails(); 
  }, [checkUpdate]); 

  return (
  
    <Container fluid={true}>
      <h2 className="text-center">Orderdetails</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listOrderdetails}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Orderdetails</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
