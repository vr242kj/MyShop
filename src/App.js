import {Navbar, Container, Nav} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound';
import Shop from './components/Shop';
import AboutProduct from './components/AboutProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className={'bg-dark'}>
        <div className="container bg-light p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/products" className={'ml-3'}>Shop</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="products" element={<Shop />} />
                <Route path="products/product/:id" element={<AboutProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;
