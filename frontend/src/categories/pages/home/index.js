import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "categories/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  
  const [listCategories, setListCategories] = React.useState([]); 
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  

  const RetrieveAllCategories = () => {
    
    console.log("Retrieve all customer");
    CRUD.getAllCate().then((res) => {
      console.log(res);
      setListCategories(res.data.data);
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  
  React.useEffect(() => {
    RetrieveAllCategories(); 
  }, [checkUpdate]); 

  return (
    
    <Container fluid={true}>
      <h2 className="text-center">Categories</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listCategories}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Categories</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
