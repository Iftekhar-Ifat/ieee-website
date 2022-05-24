import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user from '../../styles/components/Images/user.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/components/HomePageStyles/SwiperJS.module.css"

// import required modules
import { Navigation } from "swiper";

const SwiperJS = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <SwiperSlide>

                        <div className={styles.review_card}>
                            {/* photo */}
                            <div className={styles.user_img_container}>
                                <img className={styles.user_img} src={user} alt="" height={90} width90 />
                            </div>

                            {/* name & title  */}
                            <div className={styles.user_info}>
                                <p className="text-center"><span className="text-primary fw-bold">User Name</span>  <br /> <span className="text-muted">User Title</span>  </p>
                            </div>

                            {/* testimonial */}
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, commodi aut ipsa placeat libero quaerat sed, exercitationem facere repellat labore atque quod optio consectetur sint aperiam natus quibusdam ratione debitis.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
};

export default SwiperJS;