import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link to="/" eventKey="link-1" as={NavLink}>
                Top News with Search
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
