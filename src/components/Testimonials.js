import React from "react";
import "../assets/css/Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialsRating from "./TestimonialsRating";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import reviewer1 from "../assets/images/Reviewer1.jpeg";
import reviewer2 from "../assets/images/Reviewer2.jpeg";
import reviewer3 from "../assets/images/Reviewer3.jpeg";
import reviewer4 from "../assets/images/Reviewer4.jpeg";

const Testimonials=() =>{
    const reviewText1 = "The grilled fish dish was so mouthwatering!";
    const reviewText2 = "They had a great playlist running and service was awesome!";
    const reviewText3 = "My husband and I have found our new go to spot. See you again Little Lemon!";
    const reviewText4 = "Was in the area and enjoyed the cool vibes!";

    return(
        <section id="testimonials">
            <h2>Testimonials</h2>
            <Swiper
                className="mySwiper"
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                centeredSlides={true}
            >
                <SwiperSlide><TestimonialsRating image={reviewer1} name="Andrew" reviewText={reviewText1} /></SwiperSlide>
                <SwiperSlide><TestimonialsRating image={reviewer2} name="Holly" reviewText={reviewText2} /></SwiperSlide>
                <SwiperSlide><TestimonialsRating image={reviewer3} name="Maya" reviewText={reviewText3} /></SwiperSlide>
                <SwiperSlide><TestimonialsRating image={reviewer4} name="Kevin" reviewText={reviewText4}/></SwiperSlide>
            </Swiper>
        </section>
    )
}
export default Testimonials;