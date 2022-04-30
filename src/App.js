import {Navbar, Container, Nav} from "react-bootstrap";
import {Routes, Route, Link, Navigate, useLocation} from "react-router-dom";
import Shop from './components/Shop';
import AboutProduct from './components/AboutProduct';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
    let {pathname} = useLocation();

    return (
        <div className={'bg-dark'}>
            <div className="container bg-light p-3">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/products" className={'ml-3'}>Shop</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {(pathname !== "/login" && localStorage.getItem("login")) && <Header/>}
                <Routes>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/products" element={<Shop />}/>
                        <Route path="/" element={<Navigate to="/products"/>}/>
                    </Route>
                    <Route path="login" element={<Login />}/>
                    <Route path="products/product/:id" element={<AboutProduct />}/>
                    <Route path="/*" element={<NotFound />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
