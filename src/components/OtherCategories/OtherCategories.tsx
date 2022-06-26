import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const OtherCategories = (props: any) => {
    
  return (
    <Container>
        <Row>
        {props.data.categoriesnav.map((item: any, index: any) => {
        return (
          <Col key={index} style={{width:"300px"}}> <img src={item.imageUrl}/>
          <br></br>
          <Button> {item.id} </Button></Col>
        );
      })}
       </Row>
   </Container>
  );
};
export default OtherCategories;
