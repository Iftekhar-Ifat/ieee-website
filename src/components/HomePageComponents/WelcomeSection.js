import React from "react";
import styles from "../../styles/components/HomePageStyles/WelcomeSection.module.css";

const WelcomeSection = () => {
    return (
        <div className={styles.welcome_wrapper}>
            <div>
                <h1>Welcome to IEEE Computer Society</h1>
                <h3>Leading University, SB chapter</h3>
            </div>
            <div className={styles.text_section}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla montes, dignissim duis ac id mattis arcu. Scelerisque
                    arcu diam. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla montes, dignissim duis ac id mattis
                    arcu. Scelerisque arcu diam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla montes, dignissim duis ac
                    id mattis arcu. Scelerisque arcu diam.
                </p>
            </div>
        </div>
    );
};

export default WelcomeSection;
