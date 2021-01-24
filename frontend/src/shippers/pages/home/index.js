import CRUD from "../../../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "shippers/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  // Dùng duy nhất cho React Hooks FUNCTION COMPONENT. KHÔNG ĐƯỢC DÙNG REACT CLASS COMPONENT
  const [listShippers, setListShippers] = React.useState([]); //Create listCustomers State
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  // Nếu giá trị state cũ là A, sau khi mình update thành B => render lại, A set thành A => không render lại

  const RetrieveAllShippers = () => {
    // <=> function RetrieveAllCustomers(){}
    console.log("Retrieve all shipper");
    CRUD.getAllShip().then((res) => {
      console.log(res);
      setListShippers(res.data.data); //Set list customers after get all result from server
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  // useEffect: 1 dạng reactr hooks
  React.useEffect(() => {
    RetrieveAllShippers(); //Retrieve data when component rendered
  }, [checkUpdate]); //Dependencies, checkUpdate thay đổi => chạy lại useEffect

  return (
    // Short hand React.Fragment
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
