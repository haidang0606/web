import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "products/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listProducts, setListProducts] = React.useState([]);
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  

  const RetrieveAllProducts = () => {
    
    console.log("Retrieve all products");
    CRUD.getAllPro().then((res) => {
      console.log(res);
      setListProducts(res.data.data); 
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllProducts();
  }, [checkUpdate]); 

  return (
    
    <Container fluid={true}>
      <h2 className="text-center">Products</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listProducts}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Products</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
