import { Card, Col } from "react-bootstrap";
import DefaultImage from "../assets/images/default-image.jpg";
import { Link } from "react-router-dom";

const NewsItem = ({ i, item }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className="my-2">
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {item.urlToImage ? (
            <div
              className="background-image"
              style={{ backgroundImage: `url(${item.urlToImage})` }}
            />
          ) : (
            <div
              className="background-image"
              style={{ backgroundImage: `url(${DefaultImage})` }}
            />
          )}
          <Card.Text>{item.description}</Card.Text>
          <Link
            className="primary"
            to={`/${item.publishedAt}`}
            state={{ item }}
          >
            More {">"}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default NewsItem;
