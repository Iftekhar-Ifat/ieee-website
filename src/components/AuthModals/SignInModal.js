import { Modal, Container, Form } from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React from "react";
const SignInModal = (props) => {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <h1 className="fs-1 fw-bold text-center mt-4 mb-5">
                {" "}
                <span className={styles.sign_title}>Sign</span>{" "}
                <span className={styles.in_title}>In</span>{" "}
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-muted">
                                User Name or Email
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
                        <br />
                        <div className={styles.forget_pass}>
                            <a
                                style={{ textDecoration: "none" }}
                                href="http://googe.com"
                            >
                                Forget password?
                            </a>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="keep_logged_in"
                                name="logged_in_check"
                                value="Bike"
                            />
                            <label className="px-1 mt-3" for="keep_logged_in">
                                Keep me signed in
                            </label>
                            <br></br>
                        </div>
                        <div className="mt-5 mb-4 d-flex justify-content-between">
                            <div>
                                <button
                                    className={styles.signIn_btn}
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
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

export default SignInModal;
