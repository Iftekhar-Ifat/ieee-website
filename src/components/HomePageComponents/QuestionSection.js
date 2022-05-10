import React from "react";
import styles from "../../styles/components/HomePageStyles/QuestionSection.module.css";
import { Col, Container, Row, Dropdown } from "react-bootstrap";

const QuestionSection = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className="my-5">
                    <Row>
                        <Col lg={7} md={6} xs={12}>
                            <div className="text-center">
                                <h1
                                    className={`fw-bold display-1 ${styles.our}`}
                                >
                                    WELCOME
                                </h1>
                                <h5 className={`fw-bold fs-1 ${styles.our}`}>
                                    TO
                                </h5>
                                <h3
                                    className={`fw-bold display-5 ${styles.achievement}`}
                                >
                                    IEEE COMPUTER SOCIETY
                                </h3>
                                <h5 className="fw-bold">
                                    LEADING UNIVERSITY, SB CHAPTER
                                </h5>
                            </div>
                        </Col>
                        <Col
                            lg={5}
                            md={6}
                            xs={12}
                            className={styles.welcome_card}
                        >
                            <div className={styles.faqs}>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                    >
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default QuestionSection;
