import { Modal, Container, Form } from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React from "react";

const JoinUsModal = (props) => {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <h1 className="fs-1 fw-bold text-center mt-4 mb-5">
                {" "}
                <span className={styles.sign_title}>Join</span>{" "}
                <span className={styles.in_title}>Us</span>{" "}
            </h1>

            {/* horizontal line er code  */}

            <div className={styles.hr_line_container}>
                <div className={styles.hr_line_yel}> </div>
                <div className={styles.hr_line_blu}> </div>
            </div>
            {/*  */}

            <Modal.Body className={styles.signIn_modal}>
                <Container>
                    <Form className="mx-auto" style={{ width: "80%" }}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstName"
                        >
                            <Form.Label className="text-muted">
                                First Name
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="first_name"
                                type="name"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicLastName"
                        >
                            <Form.Label className="text-muted">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="last_name"
                                type="name"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-muted">
                                Email
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="email"
                                type="email"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="text-muted">
                                Password
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="password"
                                type="password"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="text-muted">
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="password"
                                type="password"
                                placeholder=""
                            />
                        </Form.Group>
                        <br />
                        <div className="mb-4 d-flex justify-content-around">
                            <div>
                                <button
                                    className={styles.joinUs_btn}
                                    type="submit"
                                >
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default JoinUsModal;
