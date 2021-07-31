import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {PERSONAL_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";



const Footer = () => {
    const history = useHistory();
    const handleClick = ()=> history.push(PERSONAL_ROUTE)

    return (
        <div>
            <Navbar  collapseOnSelect  expand="lg" bg="dark" variant="dark" fixed="bottom" style={{height:180}} >
                <Container style={{alignSelf: 'start'}} >
                    <Navbar.Brand href="#home">Happy Buy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="https://enot.in.ua/about.html">О НАС</Nav.Link>
                            <NavDropdown title="КОНТАКТЫ" id="">
                                <NavDropdown.Item href="#action/3.1">+(380)800 80 80 (бесплатно)</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">happy.buy@google.com</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="КЛИЕНТАМ" id="">
                                <NavDropdown.Item href="#action/3.1">Доставка и оплата</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Гарантии</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                            <img src='gadget.png' width={200} className='mx-4'/>

                        <Nav>
                            <Nav.Link onClick={handleClick}>ЛИЧНЫЙ КАБИНЕТ</Nav.Link>
                            <NavDropdown title="МЫ В СОЦИАЛЬНЫХ СЕТЯХ" id="">
                                <NavDropdown.Item href="#action/3.1">YouTube</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.facebook.com/profile.php?id=100006842403489">Facebook</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Footer;