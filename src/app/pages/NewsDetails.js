import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import DefaultImage from "../assets/images/default-image.jpg";

const NewsDetails = () => {
  const location = useLocation();
  const news = location?.state;
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col sm={8}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              <b>Title :</b> {news?.item?.title}
            </ListGroup.Item>
            {news?.item?.urlToImage ? (
              <div
                className="background-image"
                style={{ backgroundImage: `url(${news?.item?.urlToImage})` }}
              />
            ) : (
              <div
                className="background-image"
                style={{ backgroundImage: `url(${DefaultImage})` }}
              />
            )}
            <ListGroup.Item as="li">
              <b>Content :</b> {news?.item?.content}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center py-4">
        <Col xs lg="8">
          <Link to={"/"}> Back to list </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetails;
