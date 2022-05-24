import React from "react";
import Header from "../components/Header";
import AchievementSection from "../components/HomePageComponents/AchievementSection";
import BackgroundCarousel from "../components/HomePageComponents/BackgroundCarousel";
import WelcomeSection from "../components/HomePageComponents/WelcomeSection";
import UpcomingEvents from "../components/HomePageComponents/UpcomingEvents";
import QuestionSection from "../components/HomePageComponents/QuestionSection";
import styles from "../styles/HomePage.module.css";
import Footer from "../components/HomePageComponents/Footer";
import ReviewSection from "../components/HomePageComponents/ReviewSection";

const HomePage = () => {
    return (
        <>
            <Header />
            <BackgroundCarousel />
            <AchievementSection />
            <WelcomeSection />
            <UpcomingEvents />
            <ReviewSection></ReviewSection>
            <QuestionSection />
            <Footer />
        </>
    );
};

export default HomePage;
