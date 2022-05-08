import React from "react";
import styles from "../../styles/components/HomePageStyles/UpcomingEvents.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const UpcomingEvents = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.events_wrapper}>
                <h1>Upcoming Events</h1>
                <div className={styles.event_card}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={styles.news_wrapper}>
                <h1>Recent News</h1>
                <div className={styles.news_card}>
                    <div className={styles.upper_carousel}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={styles.news_items}>
                        <ul>
                            <li>news 1</li>
                            <li>news 2</li>
                            <li>news 3</li>
                            <li>news 4</li>
                            <li>news 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
