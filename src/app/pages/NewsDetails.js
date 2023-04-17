import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultImage from "../assets/images/default-image.jpg";

const NewsDetails = () => {
  const location = useLocation();
  const news = location?.state;
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col sm={8}>
          <ListGroup as="ul">
            {news?.item?.title && (
              <ListGroup.Item as="li" active>
                <b>Title :</b> {news?.item?.title}
              </ListGroup.Item>
            )}
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
            {news?.item?.description && (
              <ListGroup.Item as="li">
                <b>Content :</b> {news?.item?.description}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center py-4">
        <Col xs lg="8">
          <Button onClick={() => navigate(-1)}> Back to list </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetails;
