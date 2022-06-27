import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./OtherCategories.css";

const OtherCategories = (props: any) => {
  return (
    <Container>
      <Row>
        {props.data.map((item: any, index: any) => {
          return (
            <Col key={index} className="OtherCategories">
              {" "}
              <img className="OtherLines" src={item.imageUrl} alt="Click for more details" />
              <div className="ShopNow"><div className="ShopNowButton">SHOP NOW</div></div>
              <Button variant="outline-light" className="CategoriesName">
                {" "}
                {item.id}{" "}
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default OtherCategories;
