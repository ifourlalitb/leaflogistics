import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { connect } from "react-redux";

const CategorySourceSearchBox = ({ onCategorySourceSearch, news }) => {
  const [country, setCountry] = useState("us");
  const [category] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setCountry(localStorage.getItem("country"));
  }, []);
  const handleClick = (country) => {
    localStorage.setItem("country", country);
    setCountry(country);
  };

  useEffect(() => {
    onCategorySourceSearch(
      `top-headlines?country=${country}&category=${category}&sources=&q=${searchQuery}`
    );
  });

  return (
    <Container fluid className={`heroContainer-${news.theme}`}>
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
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button
                  onClick={() => handleClick("gb")}
                  className={country === "gb" ? "active" : null}
                >
                  GB
                </Button>
                <Button
                  onClick={() => handleClick("us")}
                  className={country === "us" ? "active" : null}
                >
                  US
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
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
