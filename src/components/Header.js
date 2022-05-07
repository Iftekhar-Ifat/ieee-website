import Button from "react-bootstrap/Button";
import React from "react";
import styles from "../styles/components/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img alt="ieee-logo" src="/icon/icon-image.png"></img>
                <div className={styles.nav_btn_wrapper}>
                    <button>Home</button>
                    <button>Publication</button>
                    <button>Activities</button>
                    <button>About</button>
                    <button>Members</button>
                </div>
                <div className={styles.auth_section}>
                    <Button
                        variant="outline-warning"
                        style={{ borderRadius: "50px" }}
                    >
                        Join Us
                    </Button>
                    <Button variant="warning" style={{ borderRadius: "50px" }}>
                        Sign Up
                    </Button>
                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "black",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
