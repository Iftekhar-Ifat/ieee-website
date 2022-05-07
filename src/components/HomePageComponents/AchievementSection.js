import React from "react";
import styles from "../../styles/components/HomePageStyles/AchievementSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const AchievementSection = () => {
    return (
        <div className={styles.achievement_wrapper}>
            <div className={styles.title_section}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    his is IEEE Website
                </h1>
                <h3 style={{ display: "flex", justifyContent: "center" }}>
                    subtitle of our Achievement
                </h3>
            </div>
            <div className={styles.card_section}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="/images/achievement_card.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className={`fw-bold display-1 ${styles.chk}`}>
                                First slide label
                            </h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="/images/achievement_card.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>This is IEEE Website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default AchievementSection;
