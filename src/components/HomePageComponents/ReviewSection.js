import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/components/HomePageStyles/ReviewSection.module.css";
import SwiperJS from "./SwiperJS";
const ReviewSection = () => {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.bg}>
                {/* swiperJS */}
                <div>
                    <div>
                        <h1
                            className={`${styles.heading_style} text-center fw-bold`}
                        >
                            {" "}
                            <span style={{ color: "#E7AB53" }}>
                                What People
                            </span>{" "}
                            <span style={{ color: "#0052A7" }}>
                                Say About Us
                            </span>
                        </h1>
                    </div>
                    <SwiperJS></SwiperJS>
                </div>
            </Container>
        </div>
    );
};

export default ReviewSection;
