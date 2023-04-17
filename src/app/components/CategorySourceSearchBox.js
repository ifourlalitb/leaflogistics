import { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

const CategorySourceSearchBox = ({ onCategorySourceSearch, news, flag }) => {
  const [searchParams] = useSearchParams();
  const country = searchParams.get("country") ?? "gb";
  const [category] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    onCategorySourceSearch(
      `top-headlines?country=${country}&category=${category}&sources=&q=${searchQuery}`
    );
  });

  return (
    <Container fluid className={flag ? "d-none" : ""}>
      <Row className="justify-content-md-center">
        <Col xs lg="8">
          <Form className="mt-3">
            <Form.Group>
              <Col md="7" sm="7" className="mb-3 ">
                <Form.Control
                  placeholder="Search term..."
                  name="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, null)(CategorySourceSearchBox);
