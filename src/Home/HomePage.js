import React from "react";
import Header from "../components/Header";
import AchievementSection from "../components/HomePageComponents/AchievementSection";
import BackgroundCarousel from "../components/HomePageComponents/BackgroundCarousel";
import WelcomeSection from "../components/HomePageComponents/WelcomeSection";
import UpcomingEvents from "../components/HomePageComponents/UpcomingEvents";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={styles.carousel_container}>
                <BackgroundCarousel />
                <AchievementSection />
                <WelcomeSection />
                <UpcomingEvents />
            </div>
        </>
    );
};

export default HomePage;
