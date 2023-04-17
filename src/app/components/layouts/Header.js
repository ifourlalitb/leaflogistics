import {
  Container,
  Nav,
  Navbar,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { NavLink, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (country) => {
    localStorage.setItem("country", country);
    setSearchParams({ country: country });
  };
  const country = searchParams.get("country") ?? "gb";

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to={`/?country=${country}`} as={NavLink}>
              Top News
            </Nav.Link>
            <Nav.Link to={`/search?country=${country}`} as={NavLink}>
              Search
            </Nav.Link>
          </Nav>
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
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
