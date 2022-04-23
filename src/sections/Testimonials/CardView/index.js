import { forwardRef } from "react";
import { REVIEWS } from "../../../constants";
import { TestimonialCard } from "../TestimonialCard";
import { Slide } from "react-slideshow-image";

export const CardView = forwardRef(({ b1 }, ref) => {
  const properties = {
    duration: 3000,
    transitionDuration: 300,
    easing: "ease",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slide {...properties} ref={ref}>
      {REVIEWS.map(({ name, designation, rating, comment, avatar }, idx) => (
        <div key={idx} data-aos="fade-up" data-aos-delay={300 + idx * 100}>
          <TestimonialCard
            name={name}
            designation={designation}
            rating={rating}
            comment={comment}
            avatar={avatar}
            b1={b1}
          />
        </div>
      ))}
    </Slide>
  );
});
