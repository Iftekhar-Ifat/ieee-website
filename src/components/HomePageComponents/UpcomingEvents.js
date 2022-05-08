import React from "react";
import styles from "../../styles/components/HomePageStyles/UpcomingEvents.module.css";

const UpcomingEvents = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.events_wrapper}>
                <h1>Upcoming Events</h1>
                <div className={styles.event_card}></div>
            </div>
            <div className={styles.news_wrapper}>
                <h1>Recent News</h1>
                <div className={styles.news_card}></div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
