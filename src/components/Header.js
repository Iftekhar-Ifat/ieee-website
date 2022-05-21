import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GrMenu, GrClose } from "react-icons/gr";
import "./Header.css";
import SignInModal from "./AuthModals/SignInModal";

const Header = () => {
    const [signInModalToggle, setSignInModalToggle] = useState(false);
    return (
        <>
            <Navbar
                expand="lg"
                collapseOnSelect
                className="bg-white"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="img-container">
                            <img
                                src="/icon/icon-image.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                                className="d-inline-block align-top"
                                alt="IEEE CS LU SBC Logo"
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <div className="menu-icons">
                            <GrMenu id="ham-menu" />
                            <GrClose id="ham-close" className="ham-hide" />
                        </div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="itemName">
                                Home
                            </Nav.Link>

                            <NavDropdown
                                title={
                                    <span className="text-dark">
                                        Activities
                                    </span>
                                }
                                id="basic-nav-dropdown"
                                className="itemName"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Events
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    News
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Publications
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Achievements
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Gallery
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title={<span className="text-dark">About</span>}
                                id="basic-nav-dropdown"
                                className="itemName"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    IEEE
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    IEEE R10 (Region 10)
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    IEEE Bangladesh Section
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    IEEE LU Student Branch
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.3">
                                    IEEE LU Student Branch Chapter
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className="itemName">
                                Members
                            </Nav.Link>
                        </Nav>

                        <div className="d-flex justify-content-around">
                            <Nav.Link href="#home" className="px-0">
                                <button className="pill-fill-btn mx-3">
                                    Join Us
                                </button>
                            </Nav.Link>

                            <Nav.Link href="#home" className="px-0">
                                <button
                                    className="pill-border-btn me-3"
                                    onClick={() => {
                                        setSignInModalToggle(true);
                                    }}
                                >
                                    Sign In
                                </button>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {signInModalToggle ? (
                <SignInModal
                    show={signInModalToggle}
                    onHide={() => setSignInModalToggle(false)}
                />
            ) : null}
        </>
    );
};

export default Header;
