import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import NewsItem from "./NewsItem";

const NewsList = ({ newsItems, loading, newsItemsTotal, theme, loadMore }) => {
  return (
    <Container>
      {newsItemsTotal !== null && (
        <Row className="justify-content-md-center mb-4">
          {newsItems?.map((item, i) => (
            <NewsItem key={i} ind={i} item={item} />
          ))}
        </Row>
      )}

      {loading && (
        <Row className="justify-content-md-center py-4">
          <Col xs={12} sm={8} className="text-center">
            <Spinner animation="border" size="lg" />
          </Col>
        </Row>
      )}

      {newsItems.length < newsItemsTotal && !loading && (
        <Row className="justify-content-md-center py-2">
          <Col xs={12} sm={12} className="text-center">
            <Button className="py-2" variant={theme} onClick={loadMore}>
              Load More
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewsList;
